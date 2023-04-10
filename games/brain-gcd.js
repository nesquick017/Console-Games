#!/usr/bin/env node

import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer, NOD, getAllert, questionAnswer } from "../src/index.js";

let i = 0;
let gamerName = "";
let correctRound = 0;

console.log("Welcome to the Brain Games!");
gamerName = getName();
console.log("Find the greatest common divisor of given numbers.");
for (i = 0; i < 3; i += 1) {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = NOD(numberOne, numberTwo);
  const gamerAnswer = questionAnswer(question);
  const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
  const result = compareAnswer(correctAnswer, gamerAnswer, allertToGamer);
  if (!result) break;
  correctRound += 1;
}
if (correctRound === 3) console.log("Congratulations,", gamerName, "!");
