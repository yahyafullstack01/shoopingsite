/** Базовий URL бекенду для fetch. Якщо NEXT_PUBLIC_BASE_URL не заданий (наприклад, забули .env.local), використовується прод-бекенд проєкту. */
export function getBackendBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_BASE_URL;
  if (typeof raw === "string" && raw.trim()) {
    return raw.replace(/\/$/, "");
  }
  return "https://shoopingsite-backend-1.onrender.com";
}
