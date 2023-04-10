#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import {
  compareAnswer,
  calc,
  getAllert,
  questionAnswer,
} from "../src/index.js";

const operations = ["-", "+", "*"];
let i = 0;
let correctRound = 0;

console.log("Welcome to the Brain Games!");
const gamerName = getName();
console.log("What is result of the expression ?");
for (i = 0; i < 3; i += 1) {
  const numberOperation = Math.floor(Math.random() * operations.length);
  const getOperation = operations[numberOperation];
  const numOne = Math.floor(Math.random() * 100);
  const numTwo = Math.floor(Math.random() * 100);
  const doOperation = calc(numOne, getOperation, numTwo);
  const correctAnswer = doOperation;
  const question = `${numOne} ${getOperation} ${numTwo}`;
  const gamerAnswer = questionAnswer(question);
  const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
  const result = compareAnswer(correctAnswer, gamerAnswer, allertToGamer);
  if (!result) break;
  correctRound += 1;
}
if (correctRound === 3) console.log("Congratulations", gamerName,"!");
