import readlineSync from 'readline-sync';

export function giveQuestion(question) {
  console.log('Question:', question);
}
export function getAnswer() {
  const gamerAnswer = readlineSync.question('Your answer: ');
  return gamerAnswer;
}
export function makeCompare(gamerAnswer, correctAnswer) {
  const result = gamerAnswer === correctAnswer;
  return result;
}
export function getAllert(gamerAnswer, gamerName, correctAnswer) {
  const alertWrongAnswer = `'${gamerAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${gamerName}!`;
  return alertWrongAnswer;
}

export function getGCD(numOne, numTwo) {
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
