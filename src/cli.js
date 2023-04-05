import readlineSync from "readline-sync";

export function gamerName() {
  const nameGamer = readlineSync.question("May i have your name ? : ");
  console.log("Hello, ", nameGamer, "!");
}