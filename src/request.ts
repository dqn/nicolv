import fetch from "node-fetch";
import type { RequestInit } from "node-fetch";

export function serializeCookie(cookie: Record<string, string>): string {
  return Object.entries(cookie)
    .map(([key, value]) => `${key}=${value};`)
    .join(" ");
}

export function request<Response>(
  path: string,
  options?: RequestInit,
): Promise<Response> {
  const url = `https://live2.nicovideo.jp/${path}`;

  return fetch(url, options).then((res) => res.json());
}
