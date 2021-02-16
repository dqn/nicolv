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
} from "./..";
import { request } from "./../request";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;
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

  it("delete", async () => {
    const res = await deleteToolsLiveContentsQuotation(
      userSession,
      nicoliveProgramId,
    );
    expect(res.meta.status).toBe(200);
  });
});
