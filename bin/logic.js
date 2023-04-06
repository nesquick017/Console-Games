/* eslint-disable import/prefer-default-export */
export function compareAnswer(correctAnswer, gamerAnswer, sampleToAnswer) {
  if (correctAnswer === gamerAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(sampleToAnswer);
  return 0;
}
