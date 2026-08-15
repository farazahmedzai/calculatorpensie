const express = require('express');
const path = require('path');
const { JSDOM } = require('jsdom');

async function main() {
  const app = express();
  const distDir = path.resolve(__dirname, 'dist', 'public');
  
  app.use(express.static(distDir));

  // Catch-all to serve index.html for SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(3000, async () => {
    console.log('Static server listening on port 3000');
    
    try {
      console.log('Creating JSDOM pointing to localhost...');
      const dom = await JSDOM.fromURL('http://localhost:3000/', {
        runScripts: 'dangerously',
        resources: 'usable',
        beforeParse(window) {
          // Mock missing APIs
          window.matchMedia = window.matchMedia || function() {
            return {
              matches: false,
              addListener: function() {},
              removeListener: function() {}
            };
          };
          
          window.requestIdleCallback = window.requestIdleCallback || function(cb) {
            return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 1);
          };
          
          window.IntersectionObserver = class IntersectionObserver {
            observe() {}
            unobserve() {}
            disconnect() {}
          };

          window.gtag = function() {};
          
          // Capture console log inside JSDOM
          window.console.log = (...args) => console.log('[JSDOM LOG]:', ...args);
          window.console.error = (...args) => console.error('[JSDOM ERROR]:', ...args);
          window.console.warn = (...args) => console.warn('[JSDOM WARN]:', ...args);
        }
      });

      // Track errors
      dom.window.addEventListener('error', event => {
        console.error('[JSDOM Window Error]:', event.error);
      });

      console.log('Waiting 5 seconds for React to mount...');
      await new Promise(resolve => setTimeout(resolve, 5000));

      const bodyHtml = dom.window.document.body.innerHTML;
      console.log('JSDOM HTML length after load:', bodyHtml.length);
      console.log('Contains main container:', bodyHtml.includes('Calculator'));
      if (bodyHtml.length < 500) {
        console.log('HTML Output:\n', bodyHtml);
      }
    } catch (error) {
      console.error('JSDOM Execution failed:', error);
    } finally {
      server.close(() => {
        console.log('Server stopped.');
      });
    }
  });
}

main();
