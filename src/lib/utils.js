import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Central place for the contact API endpoint.
// Set VITE_API_URL in a .env file for production; falls back to local dev backend.
export const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
