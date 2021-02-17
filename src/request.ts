import fetch from "node-fetch";
import type { RequestInfo, RequestInit } from "node-fetch";

export function request<Response>(
  url: RequestInfo,
  options: RequestInit = {},
): Promise<Response> {
  options.headers = {
    ...options.headers,
    ["User-Agent"]: "nicolv",
  };

  return fetch(url, options).then((res) => res.json());
}
