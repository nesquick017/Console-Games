import getRandomMath from '../utils.js';

function testIsPrime(num) {
  let result = '';
  if (num === 1 || num === 0) return false;
  let i = 0;
  let splitter = 1;
  while (i < num) {
    if (num % i === 0) splitter += 1;
    i += 1;
  }
  result = splitter < 3;
  return result;
}

export const explanationToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export function brainPrime() {
  const question = getRandomMath(0, 1000);
  const correctAnswer = testIsPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}
