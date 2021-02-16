import { request, serializeCookie } from "./request";
import type { Meta } from "./meta";

export type GetToolsLiveQuoteServicesVideoContentsData = {
  id: string;
  length: number;
  title: string;
  userId: string;
  quotable: boolean;
};

export type GetToolsLiveQuoteServicesVideoContentsResponse = {
  meta: Meta;
  data: GetToolsLiveQuoteServicesVideoContentsData;
};

export function getToolsLiveQuoteServicesVideoContents(
  userSession: string,
  contentId: string,
): Promise<GetToolsLiveQuoteServicesVideoContentsResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/quote/services/video/contents/${contentId}`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
