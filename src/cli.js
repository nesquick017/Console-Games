import readlineSync from 'readline-sync';
import _ from 'lodash';

export function gamerName() {
  const nameGamer = readlineSync.question('May i have your name ? : ');
  const nameToStr = nameGamer;
  const resultNameGamer = _.upperFirst(nameToStr);
  console.log('Hello, ', resultNameGamer, '!');
}
