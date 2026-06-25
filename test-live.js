import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERR:', err.message));
  try {
    await page.goto('http://localhost:5000', {waitUntil: 'networkidle0'});
    const body = await page.$eval('body', el => el.innerHTML);
    console.log('BODY LEN:', body.length);
    const rootHtml = await page.$eval('#root', el => el.innerHTML);
    console.log('ROOT HTML LEN:', rootHtml.length);
    if (rootHtml.length < 50) {
      console.log('ROOT HTML:', rootHtml);
    }
  } catch (err) {
    console.error(err);
  }
  await browser.close();
})();
