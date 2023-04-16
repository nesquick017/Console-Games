import { getRandomMath } from '../utils.js';

export const explanationToCalc = 'What is the result of the expression?';

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

export function brainCalc() {
  const num1 = getRandomMath(0, 100);
  const num2 = getRandomMath(0, 100);
  const operation = getOperation();
  const question = getExpression(num1, operation, num2);
  const correctAnswer = doCalc(num1, operation, num2);
  return [question, correctAnswer];
}
