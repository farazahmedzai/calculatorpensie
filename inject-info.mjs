import fs from 'fs';

let c = fs.readFileSync('client/src/data/static-articles.ts', 'utf8');
const replacement = `### Noua Formulă de Calcul (Valabilă din 2024 și în 2025)

![Infografic Formula de Calcul a Pensiei în România 2025](/images/formula-calcul-pensie-2025.png)

`;
c = c.replace('### Noua Formulă de Calcul (Valabilă din 2024 și în 2025)', replacement);
fs.writeFileSync('client/src/data/static-articles.ts', c);
