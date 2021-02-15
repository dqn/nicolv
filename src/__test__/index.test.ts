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
} from "./..";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;
const uid = process.env.UID!;
const sid = process.env.SID!;

describe("programinfo", () => {
  xit("post", async () => {
    const res = await getPrograminfo(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });
});

describe("extension", () => {
  xit("get", async () => {
    const res = await getExtension(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });

  xit("post", async () => {
    const res = await postExtension(userSession, nicoliveProgramId, {
      minutes: 30,
    });
    console.log(JSON.stringify(res));
  });
});

describe("operator_comment", () => {
  xit("put", async () => {
    const res = await putOperatorComment(userSession, nicoliveProgramId, {
      text: "Hello, World!",
      isPermanent: true,
      userName: "dqn",
      color: "yellow",
    });
    console.log(JSON.stringify(res));
  });

  xit("delete", async () => {
    const res = await deleteOperatorComment(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });
});

describe("segment", () => {
  xit("put", async () => {
    const res = await putSegment(userSession, nicoliveProgramId, {
      state: "on_air",
    });
    console.log(JSON.stringify(res));
  });
});

describe("tool_broadcasters_latest_program", () => {
  xit("get user", async () => {
    const res = await getToolBroadcastersLatestProgramUser(uid);
    console.log(JSON.stringify(res));
  });

  xit("get social group", async () => {
    const res = await getToolBroadcastersLatestProgramSocialGroup(sid);
    console.log(JSON.stringify(res));
  });
});

describe("tools_live_contents_quotation", () => {
  xit("delete", async () => {
    const res = await deleteToolsLiveContentsQuotation(
      userSession,
      nicoliveProgramId,
    );
    console.log(JSON.stringify(res));
  });
});
