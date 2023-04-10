#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-vars
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import {
  compareAnswer,
  getAllert,
  testPrime,
  questionAnswer,
} from "../src/index.js";

let i = 0;
let correctRound = 0;

console.log("Welcome to the Brain Games!");
const gamerName = getName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (i = 0; i < 3; i += 1) {
  let correctAnswer = "";
  const num = Math.floor(Math.random() * 100);
  testPrime(num) === true ? (correctAnswer = "yes") : (correctAnswer = "no");
  const gamerAnswer = questionAnswer(num);
  const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
  const result = compareAnswer(gamerAnswer, correctAnswer, allertToGamer);
  if (!result) break;
  correctRound += 1;
}
if (correctRound === 3) console.log(`${"Congratulations,"} ${gamerName}${"!"}`);
