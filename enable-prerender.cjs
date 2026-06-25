const { execSync } = require('child_process');
const data = JSON.stringify({
  site_id: "82069f08-0b2d-4621-9182-5759fefc149c",
  body: { prerender: "prerender" }
});

try {
  const result = execSync(`npx netlify api updateSite --data '${data}'`, { encoding: 'utf-8' });
  console.log(result);
} catch (e) {
  console.error("Error:", e.stdout || e.message);
}
