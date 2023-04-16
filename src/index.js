import readlineSync from 'readline-sync';
import getName from './cli.js';

export function giveQuestion(questionToGamer) {
  console.log('Question:', questionToGamer);
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
export function playGame(gameNameFunc) {
  console.log('Welcome to the Brain Games!');
  const gamerName = getName();
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    const [questionToGamer, correctAnswer] = gameNameFunc();
    giveQuestion(questionToGamer);
    const gamerAnswer = getAnswer();
    const isCorrect = makeCompare(gamerAnswer, correctAnswer);
    const allert = getAllert(gamerAnswer, gamerName, correctAnswer);
    if (!isCorrect) {
      console.log(allert);
      break;
    }
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${gamerName}!`);
  }
}
