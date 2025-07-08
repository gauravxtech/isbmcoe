import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App.tsx'
import './index.css'
import LoadingFallback from './components/LoadingFallback.tsx'

// Performance optimizations
const preloadCriticalResources = () => {
  // Preload critical CSS
  const criticalStyles = document.createElement('style');
  criticalStyles.textContent = `
    .loading-shimmer { animation: shimmer 1.5s infinite; }
    @keyframes shimmer { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  `;
  document.head.appendChild(criticalStyles);
};

preloadCriticalResources();

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
