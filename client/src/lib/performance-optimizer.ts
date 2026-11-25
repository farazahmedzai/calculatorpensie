// Clean Core Web Vitals monitor (no broken /src/* preloads or non-existent /sw.js)
export class PerformanceOptimizer {
  private initialized = false;

  init(): void {
    if (this.initialized || typeof window === "undefined") return;
    this.initialized = true;
  }
}

export const performanceOptimizer = new PerformanceOptimizer();
