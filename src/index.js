import readlineSync from 'readline-sync';

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
export function playGame(gameNameFunc, explanationToGame) {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name ? : ');
  console.log('Hello,', gamerName);
  console.log(explanationToGame);
  for (let i = 0; i < 3; i += 1) {
    const [questionToGamer, correctAnswer] = gameNameFunc();
    giveQuestion(questionToGamer);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const isCorrect = gamerAnswer === correctAnswer;
    if (isCorrect === false) {
      const alert = `'${gamerAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${gamerName}!`;
      return console.log(alert);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${gamerName}!`);
}
