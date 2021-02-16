export function serializeCookie(cookie: Record<string, string>): string {
  return Object.entries(cookie)
    .map(([key, value]) => `${key}=${value};`)
    .join(" ");
}
