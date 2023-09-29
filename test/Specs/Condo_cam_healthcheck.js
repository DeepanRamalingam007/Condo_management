import Cams from "../Pageobjects/Cams_healthcheck";
describe("Cams last location", () => {
  it("Validate the last location cams with counts of waterview", async () => {
    
    await Cams.Camhealth();
    
  });
});
