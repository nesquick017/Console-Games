export function compareAnswer(correctAnswer, gamerAnswer, sampleToAnswer, wrongCounter){
    if (correctAnswer === gamerAnswer){
      console.log('Correct!')
      return 1
    } else {
      console.log(sampleToAnswer)
      return 0
    }
  }