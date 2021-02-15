import { getPrograminfo, getExtension } from "./..";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;

describe("getPrograminfo", () => {
  xit("test", async () => {
    const res = await getPrograminfo(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });
});

describe("getExtension", () => {
  it("test", async () => {
    const res = await getExtension(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });
});
