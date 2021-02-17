import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";
import type { QuoteLayout } from "./quote";

export type PatchQuotationLayoutRequest = {
  layout: QuoteLayout;
};

export type PatchQuotationLayoutResponse = {
  meta: Meta;
};

export function patchQuotationLayout(
  userSession: string,
  contentId: string,
  body: PatchQuotationLayoutRequest,
): Promise<PatchQuotationLayoutResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation/layout`;

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
