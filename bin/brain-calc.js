#!/usr/bin/env node
import { brainCalc, explanation } from '../src/games/brain-calc.js';
import getName from '../src/cli.js';

const gamerName = getName();
console.log(explanation);
let i = 0;
let correctRoundCounter = 0;
for (i = 0; i < 3; i += 1) {
  const result = brainCalc(gamerName);
  if (!result) break;
  correctRoundCounter += 1;
  if (correctRoundCounter === 3) console.log(`Congratulations, ${gamerName}!`);
}
