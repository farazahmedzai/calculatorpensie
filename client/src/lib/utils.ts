import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Deterministic DD.MM.YYYY formatter to prevent SSR/client locale hydration mismatches. */
export function formatRoDate(isoDate: string): string {
  const m = String(isoDate || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return isoDate;
  return `${m[3]}.${m[2]}.${m[1]}`;
}
