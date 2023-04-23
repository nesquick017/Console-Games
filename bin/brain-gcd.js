#!/usr/bin/env node
import { GCD, explanationToGCD } from '../src/games/brain-gcd.js';
import playGame from '../src/index.js';

playGame(GCD, explanationToGCD);
