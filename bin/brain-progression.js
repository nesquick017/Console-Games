#!/usr/bin/env node
import {
  brainProgression,
  explanationToProgression,
} from '../src/games/brain-progression.js';
import { playGame } from '../src/index.js';

playGame(brainProgression, explanationToProgression);
