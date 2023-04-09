/* eslint-disable import/prefer-default-export */
export function compareAnswer(correctAnswer, gamerAnswer, sampleToAnswer) {
  if (correctAnswer == gamerAnswer) {
    console.log("Correct!");
    return 1;
  }
  console.log(sampleToAnswer);
  return 0;
}

export function calc(a, operation, b) {
  let result = 0;
  if (operation === "-") {
    result = a - b;
  }
  if (operation === "+") {
    result = a + b;
  }
  if (operation === "*") {
    result = a * b;
  }
  if (operation === "/") {
    result = Math.floor(a / b);
  }
  return result;
}

export function NOD(numberOne, numberTwo) {
  let i = 0;
  let isNodeBoth = 0;
  let smallestOne = 0;

  numberOne < numberTwo ? (smallestOne = numberOne) : (smallestOne = numberTwo);

  for (i = 0; i <= smallestOne; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      isNodeBoth = i;
    }
  }
  return isNodeBoth;
}
