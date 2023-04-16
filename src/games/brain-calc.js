import {
  getAnswer, giveQuestion, makeCompare, getAllert,
} from '../index.js';
import { getRandomMath } from '../utils.js';

export const explanation = 'What is the result of the expression?';

function getOperation() {
  const operations = ['-', '+', '*'];
  const indexOfOperation = getRandomMath(0, 3);
  const operation = operations[indexOfOperation];
  return operation;
}
function getExpression(num1, operation, num2) {
  let result = '';
  switch (operation) {
    case '-':
      result = `${num1} - ${num2}`;
      break;
    case '+':
      result = `${num1} + ${num2}`;
      break;
    default:
      result = `${num1} * ${num2}`;
      break;
  }
  return result;
}
function doCalc(a, operation, b) {
  let result = 0;
  switch (operation) {
    case '-':
      result = a - b;
      break;
    case '+':
      result = a + b;
      break;
    default:
      result = a * b;
      break;
  }
  return `${result}`;
}

export function brainCalc(gamerName) {
  let correctRound = 0;
  const num1 = getRandomMath(0, 100);
  const num2 = getRandomMath(0, 100);
  const operation = getOperation();
  const question = getExpression(num1, operation, num2);
  giveQuestion(question);
  const correctAnser = doCalc(num1, operation, num2);
  const gamerAnswer = getAnswer();
  const result = makeCompare(gamerAnswer, correctAnser);
  const wrongResult = getAllert(gamerAnswer, gamerName, correctAnser);
  if (result) {
    console.log('Correct!');
    correctRound = true;
    return correctRound;
  }
  console.log(wrongResult);
  correctRound = false;
  return correctRound;
}
