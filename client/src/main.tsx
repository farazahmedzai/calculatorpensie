import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { buildOptimizer } from "./lib/build-optimizer";
import { performanceOptimizer } from "./lib/performance-optimizer";

// Apply immediate performance optimizations
buildOptimizer.injectOptimizedCSS();
buildOptimizer.eliminateRenderBlocking();
performanceOptimizer.init();

// Complete optimization after app initialization
document.addEventListener('DOMContentLoaded', () => {
  buildOptimizer.optimize().then(results => {
    console.log(`Performance optimized: ${results.renderBlockingSavings}ms render-blocking eliminated, ${results.totalSavings}KB reduced`);
  });
});

createRoot(document.getElementById("root")!).render(<App />);
