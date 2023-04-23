import readlineSync from 'readline-sync';

export default function playGame(gameNameFunc, explanationToGame) {
  const roundCounts = 3;
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name ? : ');
  console.log('Hello,', gamerName);
  console.log(explanationToGame);
  for (let i = 0; i < roundCounts; i += 1) {
    const [questionToGamer, correctAnswer] = gameNameFunc();
    console.log('Question:', questionToGamer);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const isCorrect = gamerAnswer === correctAnswer;
    if (isCorrect === false) {
      const alert = `'${gamerAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${gamerName}!`;
      console.log(alert);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
}
