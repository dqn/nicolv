import { request, serializeCookie } from "./request";
import type { Meta } from "./meta";
import type { QuoteLayout } from "./quatation";

export type PatchToolsLiveContentsQuotationLayoutRequest = {
  layout: QuoteLayout;
};

export type PatchToolsLiveContentsQuotationLayoutResponse = {
  meta: Meta;
};

export function patchToolsLiveContentsQuotationLayout(
  userSession: string,
  contentId: string,
  body: PatchToolsLiveContentsQuotationLayoutRequest,
): Promise<PatchToolsLiveContentsQuotationLayoutResponse> {
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
