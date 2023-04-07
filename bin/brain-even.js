#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer } from "../src/index.js";

let i = 0;
let correctAnswer = "";
let correctRound = 0;

console.log("Welcome to the Brain Games!");
const gamerName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (i = 0; i < 3; i += 1) {
  const numIs = Math.round(Math.random() * 100);
  console.log("Question : ", numIs);
  const gamerAnswer = readlineSync.question("Your answer : ");
  numIs % 2 === 0 ? (correctAnswer = "yes") : (correctAnswer = "no");
  const alertWrongAnswer = `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} '${correctAnswer}'\n${"Let's try again"}, ${gamerName}`;
  const resultOfAnswer = compareAnswer(
    correctAnswer,
    gamerAnswer,
    alertWrongAnswer
  );
  if (!resultOfAnswer) break;
  correctRound += 1;
}
if (correctRound === 3) console.log("Congratulations", gamerName, '!');
