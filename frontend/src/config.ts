// Production worker by default so the deployed site works.
// For local development set VITE_BACKEND_URL in frontend/.env.local:
//   VITE_BACKEND_URL=http://127.0.0.1:8787
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://my-app.shaikhhussi786.workers.dev"
