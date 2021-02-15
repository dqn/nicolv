import {
  getPrograminfo,
  getExtension,
  postExtension,
  putOperatorComment,
} from "./..";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;

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
  it("put", async () => {
    const res = await putOperatorComment(userSession, nicoliveProgramId, {
      text: "Hello, World!",
      isPermanent: true,
      userName: "dqn",
      color: "yellow",
    });
    console.log(JSON.stringify(res));
  });
});
