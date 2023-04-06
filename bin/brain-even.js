#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer } from "./logic.js";

const gamerName = getName();
let corCounter = 0;
let i = 0;
let correctAnswer = "";
const wrongCounter = 0;

console.log("Welcome to the Brain Games!");
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (i = 0; i < 3; i += 1) {
  const numIs = Math.round(Math.random() * 100);
  console.log("Question : ", numIs);
  const gamerAnswer = readlineSync.question("Your answer : ");
  numIs % 2 === 0 ? (correctAnswer = "yes") : (correctAnswer = "no");
  const alertWrongAnswer = `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} '${correctAnswer}'\n${"Let"}'${"s try again"}, ${gamerName}`;
  const resultToAnswer = compareAnswer(
    correctAnswer,
    gamerAnswer,
    alertWrongAnswer,
    wrongCounter
  );
  if (!resultToAnswer) {
    break;
  }
  corCounter += 1;
}
corCounter > 0 ? console.log("Congratulations!", gamerName) : null;
