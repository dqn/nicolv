import fetch from "node-fetch";
import type { RequestInit } from "node-fetch";

export function serializeCookie(cookie: Record<string, string>): string {
  return Object.entries(cookie)
    .map(([key, value]) => `${key}=${value};`)
    .join(" ");
}

export function request<Response>(
  url: string,
  options?: RequestInit,
): Promise<Response> {
  return fetch(url, options).then((res) => res.json());
}
