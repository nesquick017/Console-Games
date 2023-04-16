#!/usr/bin/env node
import { brainCalc, explanationToCalc } from '../src/games/brain-calc.js';
import { playGame } from '../src/index.js';

playGame(brainCalc, explanationToCalc);
