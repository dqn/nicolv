import { request, serializeCookie } from "./request";
import type { NicoliveApiResponse } from "./response";

export type DeleteToolsLiveContentsQuotationData = {
  nicoliveProgramId: string;
};

export type DeleteToolsLiveContentsQuotationResponse = NicoliveApiResponse<DeleteToolsLiveContentsQuotationData>;

export function deleteToolsLiveContentsQuotation(
  userSession: string,
  contentId: string,
): Promise<DeleteToolsLiveContentsQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

  return request(url, {
    method: "DELETE",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
