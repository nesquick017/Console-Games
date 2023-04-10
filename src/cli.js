import readlineSync from 'readline-sync';
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function getName() {
  console.log("Welcome to the Brain Games!")
  const nameGamer = readlineSync.question('May i have your name ? : ');
  const nameToStr = nameGamer;
  const resultNameGamer = _.upperFirst(nameToStr);
  console.log('Hello, ', resultNameGamer, '!');
  return resultNameGamer;
}
