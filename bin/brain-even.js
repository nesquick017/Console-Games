#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";

const gamerName = getName();
let corCounter = 0;
let i = 0;

console.log("Welcome to the Brain Games!");
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (i = 0; i < 3; i += 1) {
  const numIs = Math.round(Math.random() * 100);
  console.log("Question : ", numIs);
  const gamerAnswer = readlineSync.question("Your answer : ");
  if (numIs % 2 === 0) {
    const correctAnswer = "yes";
    if (gamerAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} ${"'yes'"}\n${"Let"}'${"s try again"}, ${gamerName}`
      );
      break;
    }
  } else {
    const correctAnswer = "no";
    if (gamerAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} ${"'no'"}\n${"Let"}'${"s try again"}, ${gamerName}`
      );
      break;
    }
  }
  corCounter += 1;
}
corCounter === 3
  ? console.log(`${"Congratulations"}, ${gamerName} ${"!"}`)
  : null;
