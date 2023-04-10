#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer, getAllert, questionAnswer } from "../src/index.js";

let i = 0;
let correctAnswer = "";
let correctRound = 0;

const gamerName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (i = 0; i < 3; i += 1) {
  const numIs = Math.round(Math.random() * 100);
  const gamerAnswer = questionAnswer(numIs);
  numIs % 2 === 0 ? (correctAnswer = "yes") : (correctAnswer = "no");
  const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
  const result = compareAnswer(correctAnswer, gamerAnswer, allertToGamer);
  if (!result) break;
  correctRound += 1;
}
if (correctRound === 3) console.log("Congratulations", gamerName, "!");
