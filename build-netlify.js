#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

console.log('Building for Netlify...');

try {
  // Build the frontend
  console.log('Building frontend...');
  execSync('npx vite build', { stdio: 'inherit' });

  // Create netlify functions directory if it doesn't exist
  mkdirSync('netlify/functions', { recursive: true });

  // Build the serverless function
  console.log('Building serverless function...');
  execSync('npx esbuild netlify/functions/api.ts --platform=node --packages=external --bundle --format=esm --outdir=netlify/functions --target=node18', { stdio: 'inherit' });

  // Copy static files to dist/public
  console.log('Copying static files...');
  try {
    copyFileSync('public/robots.txt', 'dist/public/robots.txt');
    copyFileSync('public/sitemap.xml', 'dist/public/sitemap.xml');
    copyFileSync('public/_redirects', 'dist/public/_redirects');
  } catch (e) {
    console.log('Some static files not found, continuing...');
  }

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}