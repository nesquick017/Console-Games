import { getRandomMath } from '../utils.js';

export const explanationToGCD = 'Find the greatest common divisor of given numbers.';

function getMyGCD(numOne, numTwo) {
  let i = 0;
  let isNodeBoth = 0;
  const smallestOne = numOne < numTwo ? numOne : numTwo;
  for (i = 0; i <= smallestOne; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      isNodeBoth = i;
    }
  }
  return isNodeBoth;
}
export function GCD() {
  const myNum1 = getRandomMath(1, 100);
  const myNum2 = getRandomMath(1, 100);
  const question = `${myNum1} ${myNum2}`;
  const correctAnswer = `${getMyGCD(myNum1, myNum2)}`;
  return [question, correctAnswer];
}
