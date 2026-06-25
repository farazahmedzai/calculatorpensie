const https = require('https');

https.get('https://calculatorpensie.com/calculator-varsta-pensionare/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("Status Code:", res.statusCode);
    if (data.includes('sr-only')) {
      console.log("SUCCESS: Found sr-only h1 tag in the live HTML!");
    } else {
      console.log("WARNING: Did NOT find sr-only in the HTML.");
    }
  });
}).on('error', err => {
  console.log("Error: " + err.message);
});
