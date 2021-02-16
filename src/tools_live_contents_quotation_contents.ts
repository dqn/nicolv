import { request, serializeCookie } from "./request";
import type { Meta } from "./meta";
import type { QuoteContent } from "./quatation";

export type PatchToolsLiveContentsQuotationContentsRequest = {
  contents: QuoteContent[];
};

export type PatchToolsLiveContentsQuotationContentsResponse = {
  meta: Meta;
};

export function patchToolsLiveContentsQuotationContents(
  userSession: string,
  contentId: string,
  body: PatchToolsLiveContentsQuotationContentsRequest,
): Promise<PatchToolsLiveContentsQuotationContentsResponse> {
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
