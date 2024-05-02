// import { getAuthToken } from "./auth";

const pantipHomeApiUrl = process.env.PANTIP_HOME_API_URL;
const pantipAuthKey = process.env.PANTIP_AUTH_KEY;

async function fetchWithBasicAuth(url: string, options?: RequestInit) {
  const headers = new Headers(options?.headers);
  headers.set('Ptauthorize', `Basic ${pantipAuthKey}`);

  return fetch(`${pantipHomeApiUrl}${url}`, {
    ...options,
    headers,
  });
}

export async function get(url: string, options?: RequestInit) {
  return fetchWithBasicAuth(url, {
    ...options,
    method: 'GET',
  });
}

export async function post(url: string, body: any, options?: RequestInit) {
  return fetchWithBasicAuth(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function put(url: string, body: any, options?: RequestInit) {
  return fetchWithBasicAuth(url, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function del(url: string, options?: RequestInit) {
  return fetchWithBasicAuth(url, {
    ...options,
    method: 'DELETE',
  });
}
