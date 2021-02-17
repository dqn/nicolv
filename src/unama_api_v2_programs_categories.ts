import { request } from "./request";
import type { Meta } from "./meta";

export type GetUnamaApiV2ProgramsCategoriesData = {
  categories: string[];
  optionalCategories: string[];
};

export type GetUnamaApiV2ProgramsCategoriesResponse = {
  meta: Meta;
  data?: GetUnamaApiV2ProgramsCategoriesData;
};

export function getUnamaApiV2ProgramsCategories(): Promise<GetUnamaApiV2ProgramsCategoriesResponse> {
  const url = "https://live2.nicovideo.jp/unama/api/v2/programs/categories";

  return request(url);
}
