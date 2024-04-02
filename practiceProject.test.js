const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index");

describe("analyze array function", () => {
  it("return object from analyzed array", () => {
    const array = [2, 5, 10, 1, 3];
    const object = analyzeArray(array);
    const expectedObject = {
      average: 4.2,
      min: 1,
      max: 10,
      length: 5,
    };
    expect(object).toEqual(expectedObject);
  });
});
describe("caesarCipher function", () => {
  it("encrypt with shift 2", () => {
    const string = "i hate, jessica";
    const shift = 2;
    const expectedVal = "k jcvg, lguukec";
    expect(caesarCipher(string, shift)).toBe(expectedVal);
  });
  it("encrypt with shift -2", () => {
    const string = "abc de";
    const shift = -2;
    const expectedVal = "yza bc";
    expect(caesarCipher(string, shift)).toBe(expectedVal);
  });
});

describe("calculator function", () => {
  it("add a + b", () => {
    const a = 5.1;
    const b = 3.5;
    const expectedVal = 8.6;
    expect(calculator.add(a, b)).toBeCloseTo(expectedVal);
  });
  it("subtract a - b", () => {
    const a = 5;
    const b = 3.5;
    const expectedVal = 1.5;
    expect(calculator.subtract(a, b)).toBeCloseTo(expectedVal);
  });
  it("divide a / b", () => {
    const a = 5.5;
    const b = 1.1;
    const expectedVal = 5;
    expect(calculator.divide(a, b)).toBeCloseTo(expectedVal);
  });
  it("multiply a * b", () => {
    const a = 5.5;
    const b = 10;
    const expectedVal = 55;
    expect(calculator.multiply(a, b)).toBeCloseTo(expectedVal);
  });
});
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
