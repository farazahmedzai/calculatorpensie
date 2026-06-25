fetch('https://calculatorpensie.com').then(res => res.text()).then(html => {
  const match = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
  if (!match) {
    console.log("NO JS BUNDLE FOUND IN HTML!");
    return;
  }
  const jsFile = match[1];
  console.log('JS FILE:', jsFile);
  return fetch('https://calculatorpensie.com' + jsFile).then(res => res.text()).then(js => {
    console.log('JS LENGTH:', js.length);
    console.log('JS START:', js.substring(0, 100));
  });
}).catch(console.error);
