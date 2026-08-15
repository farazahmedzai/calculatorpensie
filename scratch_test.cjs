const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function main() {
  const distDir = path.resolve(__dirname, 'dist', 'public');
  const htmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found! Run npm run build first.');
    return;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  console.log('Creating JSDOM environment...');
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'https://calculatorpensie.com/',
    beforeParse(window) {
      // Mock window APIs that might be missing in JSDOM
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

      // Mock google analytics
      window.gtag = function() {};
    }
  });

  // Track errors in JSDOM
  dom.window.addEventListener('error', event => {
    console.error('[JSDOM Runtime Error]:', event.error);
  });

  console.log('Loading scripts...');
  // Wait a few seconds for async scripts to load/execute
  await new Promise(resolve => setTimeout(resolve, 3000));

  const bodyHtml = dom.window.document.body.innerHTML;
  console.log('JSDOM Body HTML length:', bodyHtml.length);
  console.log('JSDOM Body Preview:', bodyHtml.slice(0, 500));
}

main();
