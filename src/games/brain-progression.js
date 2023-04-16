// #!/usr/bin/env node
// // import { getName } from '../cli.js';
// // import { compareAnswer, getAllert, questionAnswer } from '../index.js';

// console.log('Welcome to the Brain Games!');
// const gamerName = getName();
// console.log('What number is missing in the progression?');
// let progression = [];
// let nextItem = 0;
// let skippedItem = 0;
// let correctRound = 0;
// let i = 0;
// for (i = 0; i < 3; i += 1) {
//   const firstElement = Math.floor(Math.random() * 10);
//   const indexToSkip = Math.floor(Math.random() * 10);
//   let k = 0;
//   for (k = 0; k < 10; k += 1) {
//     nextItem += firstElement;
//     if (k !== indexToSkip) progression.push(nextItem);
//     if (k === indexToSkip) {
//       progression.push('..');
//       skippedItem = nextItem;
//     }
//   }
//   let myProgression = progression.join(' ');
//   const correctAnswer = skippedItem;
//   const gamerAnswer = questionAnswer(myProgression);
//   const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
//   const result = compareAnswer(correctAnswer, gamerAnswer, allertToGamer);
//   if (!result) break;
//   correctRound += 1;
//   myProgression = [];
//   progression = [];
// }
// if (correctRound === 3) console.log(`${'Congratulations,'} ${gamerName}${'!'}`);
