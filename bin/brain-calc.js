#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer , calc, } from "../src/index.js";

const operations = ["-", "+", "/", "*"];
let i = 0;
let correctRound = 0;

console.log("Welcome to the Brain Games!");
const gamerName = getName();
console.log('What is result of expression ?')
console.log('* For "/" operations always round the argument down to the nearest lower integer.')
console.log('* For "*" operations use number without "," or "."')
for (i = 0; i < 3; i += 1) {
  const numberOperation = Math.floor(Math.random() * operations.length);
  const getOperation = operations[numberOperation]
  const numOne = Math.floor(Math.random() * 100);
  const numTwo = Math.floor(Math.random() * 100);
  const doOperation = calc(numOne, getOperation, numTwo)
  console.log("Question : ", numOne, getOperation, numTwo);
  const correctAnswer =  doOperation;
  const gamerAnswer = readlineSync.question("Your answer : ");
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
