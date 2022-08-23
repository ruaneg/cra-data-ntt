import { htmlDecode } from "../utils";

describe("htmlDecode test", () => {
  it("should correctly decode html string", () => {
    expect(htmlDecode("<div>Test</div>")).toBe("Test");
  });
});
