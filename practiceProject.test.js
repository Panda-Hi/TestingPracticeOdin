const { capitalize, reverseString } = require("./index");

describe("reverse string function", () => {
  it("reverse word", () => {
    const string = "monkey";
    const expectedVal = "yeknom";
    expect(reverseString(string)).toBe(expectedVal);
  });
  it("reverse letter", () => {
    const letter = "d";
    const expectedVal = "d";
    expect(reverseString(letter)).toBe(expectedVal);
  });
});

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
