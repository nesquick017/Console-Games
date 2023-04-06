import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  const gamerName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  let correctCounter = 0;
  for (i = 0; i < 3; i += 1) {
    const numIs = Math.round(Math.random() * 100);
    console.log('Question : ', numIs);
    const gamerAnswer = readlineSync.question('Your answer : ');
    if (numIs % 2 === 0) {
      if (gamerAnswer !== 'yes') {
        console.log(
          `'${gamerAnswer}' ${'is a wrong answer ;(. Correct answer was'} ${"'yes'"}\n${'Let'}'${'s try again'}, ${gamerName}`,
        );
        break;
      } else {
        console.log(`${'Correct!'}`);
      }
    } else if (gamerAnswer !== 'no') {
      console.log(
        `'${gamerAnswer}' ${'is a wrong answer ;(. Correct answer was'} ${"'no'"}\n${'Let'}'${'s try again'}, ${gamerName}`,
      );
      break;
    } else {
      console.log(`${'Correct!'}`);
    }
    correctCounter += 1;
  }
  if (correctCounter === 3) {
    console.log(`${'Congratulations'}, ${gamerName} ${'!'}`);
  }
}
