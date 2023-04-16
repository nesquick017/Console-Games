export function getRandomMath(min, max) {
  const num = Math.floor(min + Math.random() * (max - Math.random() - min));
  return num;
}
export function isEven(num) {
  const result = (num % 2 === 0);
  return result;
}
export function getProgression() {
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
export function getItem(progression) {
  const isLength = progression.length;
  const indexToSkip = getRandomMath(0, isLength);
  const itemToSkip = progression[indexToSkip];
  return itemToSkip;
}
export function insertItem(progression, itemToSkip) {
  let result = progression;
  const index = progression.indexOf(itemToSkip);
  const replacement = '..';
  result[index] = replacement;
  result = progression.join(' ');
  return result;
}
export function testPrime(num) {
  let result = '';
  if (num === 1 || num === 0) return false;
  let i = 0;
  let splitter = 1;
  while (i < num) {
    if (num % i === 0) splitter += 1;
    i += 1;
  }
  result = splitter < 3;
  return result;
}
