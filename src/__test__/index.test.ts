import {
  getPrograminfo,
  getExtension,
  postExtension,
  putOperatorComment,
  deleteOperatorComment,
  putSegment,
  getToolBroadcastersLatestProgramUser,
  getToolBroadcastersLatestProgramSocialGroup,
  deleteToolsLiveContentsQuotation,
  getToolsLiveContentsQuotation,
  postToolsLiveContentsQuotation,
  patchToolsLiveContentsQuotationContents,
  patchToolsLiveContentsQuotationLayout,
  getToolsLiveQuoteServicesVideoContents,
  getUnamaApiV2Broadcastable,
  getUnamaApiV2Programs,
  postUnamaApiV2Programs,
  patchUnamaApiV2Programs,
  getUnamaApiV2ProgramsCategories,
  getUnamaToolV2OnairUser,
  getUnamaToolV2ProgramsSsng,
} from "./..";
import { request } from "./../request";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;
const contentId = process.env.CONTENT_ID!;
const uid = process.env.UID!;
const sid = process.env.SID!;

jest.mock("./../request");
const requestMock = request as jest.Mock;
requestMock.mockResolvedValue({ meta: { status: 200 } });

describe("programinfo", () => {
  it("get", async () => {
    const res = await getPrograminfo(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("extension", () => {
  it("get", async () => {
    const res = await getExtension(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    const res = await postExtension(userSession, nicoliveProgramId, {
      minutes: 30,
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("operator_comment", () => {
  it("put", async () => {
    const res = await putOperatorComment(userSession, nicoliveProgramId, {
      text: "Hello, World!",
      isPermanent: true,
      userName: "dqn",
      color: "yellow",
    });
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    const res = await deleteOperatorComment(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("segment", () => {
  it("put", async () => {
    const res = await putSegment(userSession, nicoliveProgramId, {
      state: "on_air",
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("tool_broadcasters_latest_program", () => {
  it("get user", async () => {
    const res = await getToolBroadcastersLatestProgramUser(uid);
    expect(res.meta.status).toBe(200);
  });

  it("get social group", async () => {
    const res = await getToolBroadcastersLatestProgramSocialGroup(sid);
    expect(res.meta.status).toBe(200);
  });
});

describe("tools_live_contents_quotation", () => {
  it("get", async () => {
    const res = await getToolsLiveContentsQuotation(
      userSession,
      nicoliveProgramId,
    );
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    const res = await postToolsLiveContentsQuotation(
      userSession,
      nicoliveProgramId,
      {
        layout: {
          main: {
            source: "quote",
            volume: 1,
          },
          sub: {
            source: "self",
            volume: 1,
            isSoundOnly: false,
          },
        },
        contents: [
          {
            id: contentId,
            type: "video",
          },
        ],
      },
    );
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    const res = await deleteToolsLiveContentsQuotation(
      userSession,
      nicoliveProgramId,
    );
    expect(res.meta.status).toBe(200);
  });
});

describe("tools_live_contents_quotation_contents", () => {
  it("patch", async () => {
    const res = await patchToolsLiveContentsQuotationContents(
      userSession,
      nicoliveProgramId,
      {
        contents: [
          {
            id: contentId,
            type: "video",
          },
        ],
      },
    );
    expect(res.meta.status).toBe(200);
  });
});

describe("tools_live_contents_quotation_layout", () => {
  it("patch", async () => {
    const res = await patchToolsLiveContentsQuotationLayout(
      userSession,
      nicoliveProgramId,
      {
        layout: {
          main: {
            source: "self",
            volume: 1,
          },
          sub: {
            source: "quote",
            volume: 1,
            isSoundOnly: false,
          },
        },
      },
    );
    expect(res.meta.status).toBe(200);
  });
});

describe("tools_live_quote_services_video_contents", () => {
  it("get", async () => {
    const res = await getToolsLiveQuoteServicesVideoContents(
      userSession,
      contentId,
    );
    expect(res.meta.status).toBe(200);
  });
});

describe("unama_api_v2_broadcastable", () => {
  it("get", async () => {
    const res = await getUnamaApiV2Broadcastable(userSession, sid);
    expect(res.meta.status).toBe(200);
  });
});

describe("unama_api_v2_programs", () => {
  it("get", async () => {
    const res = await getUnamaApiV2Programs(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    const res = await postUnamaApiV2Programs(userSession, {
      category: "一般(その他)",
      communityId: sid,
      title: "Hello, World!",
      description: "from nicolv",
    });
    expect(res.meta.status).toBe(201);
  });

  it("patch", async () => {
    const res = await patchUnamaApiV2Programs(userSession, nicoliveProgramId, {
      title: "Edited title",
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("unama_api_v2_programs_categories", () => {
  it("get", async () => {
    const res = await getUnamaApiV2ProgramsCategories();
    expect(res.meta.status).toBe(200);
  });
});

describe("unama_tool_v2_onair_user", () => {
  it("get", async () => {
    const res = await getUnamaToolV2OnairUser(userSession);
    expect(res.meta.status).toBe(200);
  });
});

describe("unama_tool_v2_programs_ssng", () => {
  it("get", async () => {
    const res = await getUnamaToolV2ProgramsSsng(
      userSession,
      nicoliveProgramId,
    );
    expect(res.meta.status).toBe(200);
  });
});
