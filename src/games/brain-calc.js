import getRandomMath from '../utils.js';

export const explanationToCalc = 'What is the result of the expression?';

function getOperation() {
  const operations = ['-', '+', '*'];
  const indexOfOperation = getRandomMath(0, operations.length);
  const operation = operations[indexOfOperation];
  return operation;
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
    case '*':
      result = a * b;
      break;
    default:
      return null;
  }
  return result;
}

export function brainCalc() {
  const num1 = getRandomMath(0, 100);
  const num2 = getRandomMath(0, 100);
  const operation = getOperation();
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(doCalc(num1, operation, num2));
  return [question, correctAnswer];
}
