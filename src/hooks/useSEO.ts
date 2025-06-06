
import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  structuredData?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update title
    document.title = seoData.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) updateMetaTag('keywords', seoData.keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    if (seoData.ogImage) updateMetaTag('og:image', seoData.ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter tags
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    updateMetaTag('twitter:card', 'summary_large_image');

    // Canonical URL
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoData.canonical);
    }

    // Structured Data
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    return () => {
      // Cleanup is not needed as we're updating existing tags
    };
  }, [seoData]);
};
