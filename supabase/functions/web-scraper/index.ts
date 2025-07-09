import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, url } = await req.json();
    console.log('Web scraper request:', { query, url });

    let targetUrl = url;
    
    // If no specific URL provided, search for relevant pages
    if (!targetUrl && query) {
      const searchUrls = await findRelevantUrls(query);
      targetUrl = searchUrls[0];
    }

    if (!targetUrl) {
      return new Response(JSON.stringify({
        error: 'No URL provided or found for scraping'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check cache first
    const { data: cachedData } = await supabase
      .from('web_scraping_cache')
      .select('*')
      .eq('url', targetUrl)
      .gt('expires_at', new Date().toISOString())
      .single();

    if (cachedData) {
      console.log('Using cached data for:', targetUrl);
      
      // Update hit count
      await supabase
        .from('web_scraping_cache')
        .update({ hit_count: (cachedData.hit_count || 0) + 1 })
        .eq('id', cachedData.id);

      return new Response(JSON.stringify({
        content: cachedData.content,
        title: cachedData.title,
        url: targetUrl,
        cached: true
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Scrape the webpage
    console.log('Scraping URL:', targetUrl);
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${targetUrl}: ${response.status}`);
    }

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    if (!doc) {
      throw new Error('Failed to parse HTML');
    }

    // Extract meaningful content
    const title = doc.querySelector('title')?.textContent || '';
    
    // Remove script and style elements
    const scripts = doc.querySelectorAll('script, style, nav, header, footer, aside');
    scripts.forEach(el => el.remove());

    // Extract main content
    let content = '';
    const contentSelectors = [
      'main',
      '[role="main"]',
      '.content',
      '.main-content',
      'article',
      '.article',
      '.post',
      '.page-content'
    ];

    let mainContent = null;
    for (const selector of contentSelectors) {
      mainContent = doc.querySelector(selector);
      if (mainContent) break;
    }

    if (!mainContent) {
      mainContent = doc.querySelector('body');
    }

    if (mainContent) {
      content = extractTextContent(mainContent);
    }

    // Clean and limit content
    content = content
      .replace(/\s+/g, ' ')
      .replace(/\n+/g, '\n')
      .trim()
      .substring(0, 5000); // Limit to 5000 characters

    // Store in cache
    await supabase
      .from('web_scraping_cache')
      .upsert({
        url: targetUrl,
        content: content,
        title: title,
        scraped_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
        hit_count: 1
      });

    return new Response(JSON.stringify({
      content: content,
      title: title,
      url: targetUrl,
      cached: false
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in web-scraper function:', error);
    return new Response(JSON.stringify({
      error: 'Failed to scrape webpage',
      details: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function extractTextContent(element: any): string {
  let text = '';
  
  for (const child of element.childNodes) {
    if (child.nodeType === 3) { // Text node
      text += child.textContent?.trim() + ' ';
    } else if (child.nodeType === 1) { // Element node
      const tagName = child.tagName?.toLowerCase();
      
      // Skip certain elements
      if (['script', 'style', 'nav', 'header', 'footer', 'aside'].includes(tagName)) {
        continue;
      }
      
      // Add spacing for block elements
      if (['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'br'].includes(tagName)) {
        text += extractTextContent(child) + '\n';
      } else {
        text += extractTextContent(child) + ' ';
      }
    }
  }
  
  return text;
}

async function findRelevantUrls(query: string): Promise<string[]> {
  // In a real implementation, you might search various sources
  // For now, we'll return some common college-related URLs
  const commonUrls = [
    'https://isbmcoe.edu.in',
    'https://isbmcoe.edu.in/about-us',
    'https://isbmcoe.edu.in/admissions',
    'https://isbmcoe.edu.in/departments',
    'https://isbmcoe.edu.in/placements',
    'https://isbmcoe.edu.in/facilities'
  ];

  // Filter based on query keywords
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('admission')) {
    return ['https://isbmcoe.edu.in/admissions'];
  } else if (lowerQuery.includes('department') || lowerQuery.includes('course')) {
    return ['https://isbmcoe.edu.in/departments'];
  } else if (lowerQuery.includes('placement') || lowerQuery.includes('job')) {
    return ['https://isbmcoe.edu.in/placements'];
  } else if (lowerQuery.includes('about') || lowerQuery.includes('college')) {
    return ['https://isbmcoe.edu.in/about-us'];
  }
  
  return [commonUrls[0]]; // Default to main page
}