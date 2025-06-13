import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize Google Analytics (only in production)
if (typeof window !== 'undefined' && import.meta.env.PROD) {
  import('./lib/analytics').then(({ initGA }) => {
    initGA();
  });
}

createRoot(document.getElementById("root")!).render(<App />);
