import { createRoot, hydrateRoot } from "react-dom/client";
import App, { preloadRouteChunk } from "./App";
import "./index.css";

async function mount() {
  const rootEl = document.getElementById("root")!;
  if (rootEl.hasChildNodes()) {
    await preloadRouteChunk(window.location.pathname);
    hydrateRoot(rootEl, <App />);
  } else {
    createRoot(rootEl).render(<App />);
  }
}

mount();
