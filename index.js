/* eslint-disable no-restricted-syntax */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }

  return reversedString;
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function isCharacter(char) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabet.includes(char);
}
function shiftedChar(char, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // get index of letter in alphabet
  let indexInAlphabet = alphabet.indexOf(char);
  indexInAlphabet += shift;

  if (indexInAlphabet >= alphabet.length) {
    indexInAlphabet -= alphabet.length;
  } else if (indexInAlphabet < 0) {
    indexInAlphabet += alphabet.length;
  }
  return alphabet[indexInAlphabet];
}
function caesarCipher(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let encryptedString = "";
  string = string.toLowerCase();
  for (const char of string) {
    if (isCharacter(char)) {
      const shiftedCharacter = shiftedChar(char, shift);
      encryptedString += shiftedCharacter;
    } else {
      encryptedString += char;
    }
  }
  return encryptedString;
}

function analyzeArray(array) {
  const average =
    array.reduce((partialSum, a) => partialSum + a, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
