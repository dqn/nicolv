import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";
import type { QuoteContent } from "./quote";

export type PatchQuotationContentsRequest = {
  contents: QuoteContent[];
};

export type PatchQuotationContentsResponse = {
  meta: Meta;
};

export function patchQuotationContents(
  userSession: string,
  contentId: string,
  body: PatchQuotationContentsRequest,
): Promise<PatchQuotationContentsResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation/contents`;

  return request(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}
