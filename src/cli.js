import readlineSync from 'readline-sync';

export default function getName() {
  const nameGamer = readlineSync.question('May I have your name ? : ');
  console.log('Hello,', nameGamer);
  return nameGamer;
}
