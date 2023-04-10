#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { compareAnswer, getAllert } from "../src/index.js";

const gamerName = getName();
console.log("What number is missing in the progression ?");
let progression = [];
let nextItem = 0;
let skippedItem = 0;
let correctRound = 0;
let i = 0;
for (i = 0; i < 3; i += 1) {
  // eslint-disable-next-line prefer-const
  let firstElement = Math.floor(Math.random() * 10);
  // eslint-disable-next-line prefer-const
  let indexToSkip = Math.floor(Math.random() * 10);
  let k = 0;
  for (k = 0; k < 10; k += 1) {
    nextItem += firstElement;
    if (k !== indexToSkip) progression.push(nextItem);
    if (k === indexToSkip) {
      progression.push("...");
      skippedItem = nextItem;
    }
  }
  let myProgression = progression.join(" ");
  console.log(myProgression);
  const correctAnswer = skippedItem;
  const gamerAnswer = readlineSync.question("Your answer : ");
  const allertToGamer = getAllert(gamerAnswer, gamerName, correctAnswer);
  const result = compareAnswer(correctAnswer, gamerAnswer, allertToGamer);
  if (!result) break;
  correctRound += 1;
  myProgression = [];
  progression = [];
}
if (correctRound === 3) console.log("Congratulations", gamerName, "!");
