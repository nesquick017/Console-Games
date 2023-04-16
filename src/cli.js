import readlineSync from 'readline-sync';

export default function getName() {
  console.log('Welcome to the Brain Games!');
  const nameGamer = readlineSync.question('May I have your name ? : ');
  console.log('Hello,', nameGamer);
  return nameGamer;
}
