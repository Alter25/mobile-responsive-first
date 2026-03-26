const BASE_URL = "http://localhost:8000";

export async function apiFetch<T>(
  endpoint: string, options: RequestInit = {}
): Promise<T>{
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...options
  })
  

  if (!res.ok) {
    const error = await res.json();
    const message = typeof error.detail === "string"
      ? error.detail
      : JSON.stringify(error.detail)
    throw new Error(message)
  }

  return res.json();

}