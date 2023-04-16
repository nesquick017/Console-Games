import getRandomMath from '../utils.js';

function getMyProgression() {
  let i = 0;
  const myProgression = [];
  const element = getRandomMath(1, 100);
  let nextElement = 0;
  const progressionLength = getRandomMath(5, 10);
  while (i < progressionLength) {
    if (element !== 0) {
      nextElement += element;
      myProgression.push(nextElement);
      i += 1;
    } else {
      nextElement += 1;
      myProgression.push(nextElement);
      i += 1;
    }
  }
  return myProgression;
}
function getItemOfProgression(progression) {
  const isLength = progression.length;
  const indexToSkip = getRandomMath(0, isLength);
  const itemToSkip = progression[indexToSkip];
  return itemToSkip;
}
function insertItemInProgression(progression, itemToSkip) {
  let result = progression;
  const index = progression.indexOf(itemToSkip);
  const replacement = '..';
  result[index] = replacement;
  result = progression.join(' ');
  return result;
}
export const explanationToProgression = 'What number is missing in the progression?';
export function brainProgression() {
  const myProgression = getMyProgression();
  const insertedItemOfProgression = getItemOfProgression(myProgression);
  const finalProgression = insertItemInProgression(
    myProgression,
    insertedItemOfProgression,
  );
  const question = finalProgression;
  const correctAnswer = `${insertedItemOfProgression}`;
  return [question, correctAnswer];
}
