const cp = require('child_process');
try {
  const result = cp.execSync(`npx netlify api listSiteSnippets --data "{\\"site_id\\": \\"82069f08-0b2d-4621-9182-5759fefc149c\\"}"`, { encoding: 'utf8' });
  console.log("SUCCESS");
  console.log(result);
} catch (e) {
  console.log("FAILED");
  console.log(e.stdout || e.message);
}
