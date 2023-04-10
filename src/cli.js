import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function getName() {
  const gamerName = readlineSync.question('May I have your name ? ');
  console.log('Hello,', gamerName);
  return gamerName;
}
