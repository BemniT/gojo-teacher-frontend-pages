const DEFAULT_BACKEND = "https://gojo-unified-backend-165080444737.us-central1.run.app/api/teacher";

const viteEnv = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_BACKEND_BASE;
const nodeViteEnv = typeof process !== "undefined" && process.env && process.env.VITE_BACKEND_BASE;
const reactEnv = typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_BASE;

const rawBase = (viteEnv || nodeViteEnv || reactEnv || DEFAULT_BACKEND) || DEFAULT_BACKEND;

export const BACKEND_BASE = String(rawBase).trim().replace(/\/$/, "");
export const API_BASE = `${BACKEND_BASE}/api`;
