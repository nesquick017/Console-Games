/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
// below the function to compare answer and to display the right one or to display the alert to wrong answer.

import readlineSync from "readline-sync";

export function compareAnswer(correctAnswer, gamerAnswer, sampleToAnswer) {
  if (correctAnswer == gamerAnswer) {
    console.log("Correct!");
    return 1;
  }
  console.log(sampleToAnswer);
  return 0;
}
// below the calculator to get the right answer for brain-calc.

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
// below the function to find NOD for 2 numbers

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

// below the function to build the allert

export function getAllert(gamerAnswer, gamerName, correctAnswer) {
  const alertWrongAnswer = `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} '${correctAnswer}'\n${"Let's try again"}, ${gamerName}`;
  return alertWrongAnswer;
}

// below logick to prime numbers

export function testPrime(num) {
  if (num === 1) return false;
  let i = 0;
  let splitter = 1;
  while (i < num) {
    if (num % i === 0) splitter += 1;
    i += 1;
  }
  if (splitter > 2) return false;
  // eslint-disable-next-line no-else-return
  else return true;
}

export function questionAnswer(num) {
  console.log("Question :", num);
  const gamerAnswer = readlineSync.question("Your answer : ");
  return gamerAnswer;
}
