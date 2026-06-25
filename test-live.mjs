import { JSDOM, VirtualConsole } from 'jsdom';

(async () => {
  try {
    const virtualConsole = new VirtualConsole();
    virtualConsole.on("error", () => { /* ignore */ });
    virtualConsole.on("warn", () => { /* ignore */ });
    virtualConsole.on("info", () => { /* ignore */ });
    virtualConsole.on("dir", () => { /* ignore */ });
    virtualConsole.sendTo(console, { omitJSDOMErrors: true });

    const dom = await JSDOM.fromURL('https://calculatorpensie.com', {
      runScripts: "dangerously",
      resources: "usable",
      pretendToBeVisual: true,
      virtualConsole
    });
    
    // Wait for React to render
    setTimeout(() => {
      const rootHtml = dom.window.document.getElementById('root').innerHTML;
      if (rootHtml.length > 100) {
        console.log("SUCCESS: Site is rendering! Root length:", rootHtml.length);
      } else {
        console.log("FAIL: Root is still empty! Length:", rootHtml.length);
      }
      process.exit(0);
    }, 8000);
  } catch (err) {
    console.error("Fetch error:", err);
  }
})();
