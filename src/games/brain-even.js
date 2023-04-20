import getRandomMath from '../utils.js';

export const explanationToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
function testIsEven(num) {
  const result = num % 2 === 0;
  return result;
}
export function brainEven() {
  const question = getRandomMath(0, 100);
  const correctAnswer = testIsEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}
