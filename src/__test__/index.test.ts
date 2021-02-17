import {
  getBroadcastable,
  getUserProgram,
  getSocialGroupProgram,
  postEnqueteResult,
  postEnquete,
  deleteEnquete,
  getExtension,
  postExtension,
  getOnairs,
  putOperatorComment,
  deleteOperatorComment,
  getProgramSchedules,
  getPrograminfo,
  getProgramsCategories,
  getProgramsSsng,
  postProgramsSsng,
  deleteProgramsSsng,
  getPrograms,
  postPrograms,
  patchPrograms,
  patchQuotationContents,
  patchQuotationLayout,
  getQuotation,
  postQuotation,
  deleteQuotation,
  putSegment,
  getStatistics,
  getUserCommentPermission,
  getUserNickname,
  getVideoContents,
} from "./..";
import { request } from "./../request";
import { serializeCookie } from "./../cookie";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;
const contentId = process.env.CONTENT_ID!;
const uid = process.env.UID!;
const sid = process.env.SID!;

jest.mock("./../request");
const requestMock = request as jest.MockedFunction<typeof request>;
requestMock.mockResolvedValue({ meta: { status: 200 } });

const requestActual = jest.requireActual("./../request")
  .request as typeof request;

describe("serializeCookie", () => {
  it("test", () => {
    const cookie = serializeCookie({
      user_session: "user_session_XXXXX",
    });
    expect(cookie).toBe("user_session=user_session_XXXXX;");
  });
});

describe("broadcastable", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getBroadcastable(userSession, sid);
    expect(res.meta.status).toBe(200);
  });

  it("get without sid", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getBroadcastable(userSession);
    expect(res.meta.status).toBe(200);
  });
});

describe("broadcasters_program", () => {
  it("get user", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getUserProgram(uid);
    expect(res.meta.status).toBe(200);
  });

  it("get social group", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getSocialGroupProgram(sid);
    expect(res.meta.status).toBe(200);
  });
});

describe("enquete_result", () => {
  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postEnqueteResult(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("enquete", () => {
  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postEnquete(userSession, nicoliveProgramId, {
      question: "which?",
      items: ["foo", "bar", "baz"],
    });
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await deleteEnquete(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("extension", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getExtension(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postExtension(userSession, nicoliveProgramId, {
      minutes: 30,
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("onairs", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getOnairs(userSession);
    expect(res.meta.status).toBe(200);
  });
});

describe("operator_comment", () => {
  it("put", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await putOperatorComment(userSession, nicoliveProgramId, {
      text: "Hello, World!",
      isPermanent: true,
      userName: "dqn",
      color: "yellow",
    });
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await deleteOperatorComment(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("program_schedules", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getProgramSchedules(userSession);
    expect(res.meta.status).toBe(200);
  });
});

describe("programinfo", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getPrograminfo(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("programs_categories", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getProgramsCategories();
    expect(res.meta.status).toBe(200);
  });
});

describe("programs_ssng", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getProgramsSsng(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postProgramsSsng(userSession, nicoliveProgramId, [
      { type: "word", body: "foo" },
      { type: "user", body: "42" },
      { type: "command", body: "bar" },
    ]);
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await deleteProgramsSsng(userSession, nicoliveProgramId, {
      id: [42],
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("programs", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getPrograms(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("get without nicoliveProgramId", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getPrograms(userSession);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postPrograms(userSession, {
      category: "一般(その他)",
      communityId: sid,
      title: "Hello, World!",
      description: "from nicolv",
    });
    expect(res.meta.status).toBe(200);
  });

  it("patch", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await patchPrograms(userSession, nicoliveProgramId, {
      title: "Edited title",
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("quotation_contents", () => {
  it("patch", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await patchQuotationContents(userSession, nicoliveProgramId, {
      contents: [
        {
          id: contentId,
          type: "video",
        },
      ],
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("quotation_layout", () => {
  it("patch", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await patchQuotationLayout(userSession, nicoliveProgramId, {
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
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("quotation", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getQuotation(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });

  it("post", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await postQuotation(userSession, nicoliveProgramId, {
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
    });
    expect(res.meta.status).toBe(200);
  });

  it("delete", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await deleteQuotation(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("segment", () => {
  it("put", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await putSegment(userSession, nicoliveProgramId, {
      state: "on_air",
    });
    expect(res.meta.status).toBe(200);
  });
});

describe("statistics", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getStatistics(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("user_comment_permission", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getUserCommentPermission(userSession, nicoliveProgramId);
    expect(res.meta.status).toBe(200);
  });
});

describe("user_nickname", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getUserNickname(uid);
    expect(res.error).toBeUndefined();
  });
});

describe("video_contents", () => {
  it("get", async () => {
    // requestMock.mockImplementation(requestActual);
    const res = await getVideoContents(userSession, contentId);
    expect(res.meta.status).toBe(200);
  });
});
