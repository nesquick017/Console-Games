import getRandomMath from '../utils.js';

export const explanationToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
function testIsEven(num) {
  const result = num % 2 === 0;
  return result;
}
export function brainEven() {
  const myNum = getRandomMath(0, 100);
  const question = myNum;
  const correctAnswer = testIsEven(myNum) ? 'yes' : 'no';
  return [question, correctAnswer];
}
