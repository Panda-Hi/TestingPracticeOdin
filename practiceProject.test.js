const { capitalize } = require("./index");

describe("capitalize function", () => {
  it("capitalize first letter of string", () => {
    const testString = "mango";
    const expectedVal = "Mango";
    expect(capitalize(testString)).toBe(expectedVal);
  });
  it("capitalize single letter", () => {
    const testLetter = "b";
    const expectedVal = "B";
    expect(capitalize(testLetter)).toBe(expectedVal);
  });
});
