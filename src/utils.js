export default function getRandomMath(min, max) {
  const num = Math.floor(min + Math.random() * (max - Math.random() - min));
  return num;
}
