#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";

const gamerName = getName();
let corAnswer = 0;
let i = 0;

console.log("Welcome to the Brain Games!");
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (i = 0; i < 3; i += 1) {
  const numIs = Math.round(Math.random() * 100);
  console.log("Question : ", numIs);
  const gamerAnswer = readlineSync.question("Your answer : ");
  if (numIs % 2 === 0) {
    if (gamerAnswer !== "yes") {
      console.log(
        `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} ${"'yes'"}\n${"Let"}'${"s try again"}, ${gamerName}`
      );
      break;
    } else {
      console.log(`${"Correct!"}`);
    }
  } else if (gamerAnswer !== "no") {
    console.log(
      `'${gamerAnswer}' ${"is a wrong answer ;(. Correct answer was"} ${"'no'"}\n${"Let"}'${"s try again"}, ${gamerName}`
    );
    break;
  } else {
    console.log(`${"Correct!"}`);
  }
  corAnswer += 1;
}
corAnswer === 3
  ? console.log(`${"Congratulations"}, ${gamerName} ${"!"}`)
  : null;
