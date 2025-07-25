#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, writeFileSync } from 'fs';

console.log('Building static site for Netlify...');

try {
  // Build only the frontend (no server)
  console.log('Building frontend assets...');
  execSync('npx vite build --mode production', { stdio: 'inherit' });

  // Ensure dist/public exists and copy static files
  const distPath = 'dist/public';
  if (existsSync(distPath)) {
    console.log('Copying static files...');
    
    // Copy robots.txt, sitemap.xml, ads.txt, and _redirects if they exist
    if (existsSync('public/robots.txt')) {
      copyFileSync('public/robots.txt', `${distPath}/robots.txt`);
    }
    
    if (existsSync('public/sitemap.xml')) {
      copyFileSync('public/sitemap.xml', `${distPath}/sitemap.xml`);
    }
    
    if (existsSync('public/ads.txt')) {
      copyFileSync('public/ads.txt', `${distPath}/ads.txt`);
    }
    
    // Copy _redirects file if it exists in public directory
    if (existsSync('public/_redirects')) {
      copyFileSync('public/_redirects', `${distPath}/_redirects`);
    } else {
      // Fallback: Create basic _redirects for SPA routing if no custom one exists
      const redirectsContent = `/*    /index.html   200`;
      writeFileSync(`${distPath}/_redirects`, redirectsContent);
    }
    
    console.log('Static build completed successfully!');
  } else {
    console.error('Build output directory not found');
    process.exit(1);
  }
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}