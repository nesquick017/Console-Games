#!/usr/bin/env node
import { brainPrime, explanationToPrime } from '../src/games/brain-prime.js';
import playGame from '../src/index.js';

playGame(brainPrime, explanationToPrime);
