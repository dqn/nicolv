import { getPrograminfo } from "./../";

const userSession = process.env.USER_SESSION!;
const nicoliveProgramId = process.env.NICOLIVE_PROGRAM_ID!;

describe("getPrograminfo", () => {
  it("fetch", async () => {
    const res = await getPrograminfo(userSession, nicoliveProgramId);
    console.log(JSON.stringify(res));
  });
});
