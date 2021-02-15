import { getPrograminfo, getExtension, postExtension } from "./..";

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

  it("post", async () => {
    const res = await postExtension(userSession, nicoliveProgramId, {
      minutes: 30,
    });
    console.log(JSON.stringify(res));
  });
});
