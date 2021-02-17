# nicolv

[![CI](https://github.com/dqn/nicolv/workflows/CI/badge.svg)](https://github.com/dqn/nicolv/actions)
[![npm version](https://img.shields.io/npm/v/nicolv.svg)](https://www.npmjs.com/package/nicolv)

Nicolive API for Node.js.

## Installation

Using yarn:

```bash
$ yarn add nicolv
```

Using npm:

```bash
$ npm install nicolv
```

### Example

```js
const { getPrograminfo } = require("nicolv");

const userSession = "user_session_XXXXX";
const nicoliveProgramId = "lvXXXXX";

const { meta, data } = await getPrograminfo(userSession, nicoliveProgramId);

console.log(meta.status);

if (data !== undefined) {
  console.log(data.title);
  console.log(data.description);
}
```

## API

### getBroadcastable

`GET https://live2.nicovideo.jp/unama/api/v2/broadcastable`

<!-- prettier-ignore -->
```ts
function getBroadcastable(userSession: string, communityId?: string): Promise<GetBroadcastableResponse>;
```

### getUserProgram

`GET https://live2.nicovideo.jp/unama/tool/v1/broadcasters/user/:uid/program`

<!-- prettier-ignore -->
```ts
function getUserProgram(uid: number | string): Promise<GetBroadcastersProgramResponse>;
```

### getSocialGroupProgram

`GET https://live2.nicovideo.jp/unama/tool/v1/broadcasters/social_group/:sid/program`

<!-- prettier-ignore -->
```ts
function getSocialGroupProgram(sid: string): Promise<GetBroadcastersProgramResponse>;
```

### postEnqueteResult

`POST https://live2.nicovideo.jp/unama/watch/:nicoliveProgramId/enquete/result`

<!-- prettier-ignore -->
```ts
function postEnqueteResult(userSession: string, nicoliveProgramId: string): Promise<PostEnqueteResultResponse>;
```

### postEnquete

`POST https://live2.nicovideo.jp/unama/watch/:nicoliveProgramId/enquete`

<!-- prettier-ignore -->
```ts
function postEnquete(userSession: string, nicoliveProgramId: string, body: PostEnqueteRequest): Promise<PostEnqueteResponse>;
```

### deleteEnquete

`DELETE https://live2.nicovideo.jp/unama/watch/:nicoliveProgramId/enquete`

<!-- prettier-ignore -->
```ts
function deleteEnquete(userSession: string, nicoliveProgramId: string): Promise<DeleteEnqueteResponse>;
```

### getExtension

`GET https://live2.nicovideo.jp/watch/:nicoliveProgramId/extension`

<!-- prettier-ignore -->
```ts
function getExtension(userSession: string, nicoliveProgramId: string): Promise<GetExtensionResponse>;
```

### postExtension

`POST https://live2.nicovideo.jp/watch/:nicoliveProgramId/extension`

<!-- prettier-ignore -->
```ts
function postExtension(userSession: string, nicoliveProgramId: string, body: PostExtensionRequest): Promise<PostExtensionResponse>;
```

### getOnairs

`GET https://live2.nicovideo.jp/unama/tool/v2/onairs/user`

<!-- prettier-ignore -->
```ts
function getOnairs(userSession: string): Promise<GetOnairsResponse>;
```

### putOperatorComment

`PUT https://live2.nicovideo.jp/watch/:nicoliveProgramId/operator_comment`

<!-- prettier-ignore -->
```ts
function putOperatorComment(userSession: string, nicoliveProgramId: string, body: PutOperatorCommentRequest): Promise<PutOperatorCommentResponse>;
```

### deleteOperatorComment

`DELETE https://live2.nicovideo.jp/watch/:nicoliveProgramId/operator_comment`

<!-- prettier-ignore -->
```ts
function deleteOperatorComment(userSession: string, nicoliveProgramId: string): Promise<DeleteOperatorCommentResponse>;
```

### getProgramSchedules

`GET https://live2.nicovideo.jp/unama/tool/v1/program_schedules`

<!-- prettier-ignore -->
```ts
function getProgramSchedules(userSession: string): Promise<GetProgramSchedulesResponse>;
```

### getPrograminfo

`GET https://live2.nicovideo.jp/unama/watch/:nicoliveProgramId/programinfo`

<!-- prettier-ignore -->
```ts
function getPrograminfo(userSession: string, nicoliveProgramId: string): Promise<GetPrograminfoResponse>;
```

### getProgramsCategories

`GET https://live2.nicovideo.jp/unama/api/v2/programs/categories`

<!-- prettier-ignore -->
```ts
function getProgramsCategories(): Promise<GetProgramsCategoriesResponse>;
```

### getProgramsSsng

`GET https://live2.nicovideo.jp/unama/tool/v2/programs/:nicoliveProgramId/ssng`

<!-- prettier-ignore -->
```ts
function getProgramsSsng(userSession: string, nicoliveProgramId: string): Promise<GetProgramsSsngResponse>;
```

### postProgramsSsng

`POST https://live2.nicovideo.jp/unama/tool/v2/programs/:nicoliveProgramId/ssng`

<!-- prettier-ignore -->
```ts
function postProgramsSsng(userSession: string, nicoliveProgramId: string, body: PostProgramsSsngRequest): Promise<PostProgramsSsngResponse>;
```

### deleteProgramsSsng

`DELETE https://live2.nicovideo.jp/unama/tool/v2/programs/:nicoliveProgramId/ssng`

<!-- prettier-ignore -->
```ts
function deleteProgramsSsng(userSession: string, nicoliveProgramId: string, body: DeleteProgramsSsngRequest): Promise<DeleteProgramsSsngResponse>;
```

### getPrograms

`GET https://live2.nicovideo.jp/unama/api/v2/programs/:nicoliveProgramId`

`GET https://live2.nicovideo.jp/unama/api/v2/programs/latest`

<!-- prettier-ignore -->
```ts
function getPrograms(userSession: string, nicoliveProgramId?: string): Promise<GetProgramsResponse>;
```

### postPrograms

`POST https://live2.nicovideo.jp/unama/api/v2/programs`

<!-- prettier-ignore -->
```ts
function postPrograms(userSession: string, body: PostProgramsRequest): Promise<PostProgramsResponse>;
```

### patchPrograms

`PATCH https://live2.nicovideo.jp/unama/api/v2/programs/:nicoliveProgramId`

<!-- prettier-ignore -->
```ts
function patchPrograms(userSession: string, nicoliveProgramId: string, body: PatchProgramsRequest): Promise<PatchProgramsResponse>;
```

### patchQuotationContents

`PATCH https://lapi.spi.nicovideo.jp/v1/tools/live/contents/:contentId/quotation/contents`

<!-- prettier-ignore -->
```ts
function patchQuotationContents(userSession: string, contentId: string, body: PatchQuotationContentsRequest): Promise<PatchQuotationContentsResponse>;
```

### patchQuotationLayout

`PATCH https://lapi.spi.nicovideo.jp/v1/tools/live/contents/:contentId/quotation/layout`

<!-- prettier-ignore -->
```ts
function patchQuotationLayout(userSession: string, contentId: string, body: PatchQuotationLayoutRequest): Promise<PatchQuotationLayoutResponse>;
```

### getQuotation

`GET https://lapi.spi.nicovideo.jp/v1/tools/live/contents/:contentId/quotation`

<!-- prettier-ignore -->
```ts
function getQuotation(userSession: string, contentId: string): Promise<GetQuotationResponse>;
```

### postQuotation

`POST https://lapi.spi.nicovideo.jp/v1/tools/live/contents/:contentId/quotation`

<!-- prettier-ignore -->
```ts
function postQuotation(userSession: string, contentId: string, body: PostQuotationRequest): Promise<PostQuotationResponse>;
```

### deleteQuotation

`DELETE https://lapi.spi.nicovideo.jp/v1/tools/live/contents/:contentId/quotation`

<!-- prettier-ignore -->
```ts
function deleteQuotation(userSession: string, contentId: string): Promise<DeleteQuotationResponse>;
```

### putSegment

`PUT https://live2.nicovideo.jp/watch/:nicoliveProgramId/segment`

<!-- prettier-ignore -->
```ts
function putSegment(userSession: string, nicoliveProgramId: string, body: PutSegmentRequest): Promise<PutSegmentResponse>;
```

### getStatistics

`GET https://live2.nicovideo.jp/watch/:nicoliveProgramId/statistics`

<!-- prettier-ignore -->
```ts
function getStatistics(userSession: string, nicoliveProgramId: string): Promise<GetStatisticsResponse>;
```

### getUserCommentPermission

`GET https://live2.nicovideo.jp/unama/watch/:nicoliveProgramId/user_comment_permission`

<!-- prettier-ignore -->
```ts
function getUserCommentPermission(userSession: string, nicoliveProgramId: string): Promise<GetUserCommentPermissionResponse>;
```

### getUserNickname

`GET https://api.live2.nicovideo.jp/api/v1/user/nickname`

<!-- prettier-ignore -->
```ts
function getUserNickname(userId: number | string): Promise<GetUserNicknameResponse>;
```

### getVideoContents

`GET https://lapi.spi.nicovideo.jp/v1/tools/live/quote/services/video/contents/:contentId`

<!-- prettier-ignore -->
```ts
function getVideoContents(userSession: string, contentId: string): Promise<GetVideoContentsResponse>;
```

## License

MIT
