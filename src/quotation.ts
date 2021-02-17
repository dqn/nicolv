import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";
import type { QuoteContent, QuoteLayout } from "./quote";

export type GetQuotationResponse = {
  meta: Meta;
  layout?: QuoteLayout;
  currentContent?: QuoteContent;
};

export function getQuotation(
  userSession: string,
  contentId: string,
): Promise<GetQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}

export type PostQuotationRequest = {
  layout: QuoteLayout;
  contents: QuoteContent[];
};

export type PostQuotationResponse = {
  meta: Meta;
};

export function postQuotation(
  userSession: string,
  contentId: string,
  body: PostQuotationRequest,
): Promise<PostQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

  return request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}

export type DeleteQuotationResponse = {
  meta: Meta;
};

export function deleteQuotation(
  userSession: string,
  contentId: string,
): Promise<DeleteQuotationResponse> {
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
