const routes = ['calculator-varsta-pensionare', 'calculator-puncte-pensie', 'calculator-pensie-pilon-2', 'program-excel-calcul-pensie'];

async function main() {
  for (const route of routes) {
    const res = await fetch(`https://calculatorpensie.com/${route}`);
    const t = await res.text();
    const match = t.match(/<title>(.*?)<\/title>/i);
    console.log(route, ':', match ? match[1] : 'Not found');
  }
}

main();
