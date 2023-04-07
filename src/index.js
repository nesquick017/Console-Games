/* eslint-disable import/prefer-default-export */
export function compareAnswer(correctAnswer, gamerAnswer, sampleToAnswer) {
  if (correctAnswer == gamerAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(sampleToAnswer);
  return 0;
}

export function calc(a, operation, b){
  let result = 0;
  if (operation === '-'){
    result = a - b;
  } if (operation === '+'){
    result = a + b;
  } if (operation === '*'){
    result = a * b;
  } if (operation === '/'){
    result = Math.floor(a / b);
  }
  return result;
}
