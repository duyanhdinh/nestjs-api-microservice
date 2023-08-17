export const getRandomInt = (max: number, min = 0): number =>
  Math.floor(Math.random() * (max - min) + min);
export const getRandomDigit = (numberOfDigit: number): number =>
  getRandomInt(10 ** numberOfDigit, 10 ** (numberOfDigit - 1));

export const getRandom2Digit = (): number => getRandomDigit(2);
