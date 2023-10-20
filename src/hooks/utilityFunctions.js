export function answerStyles(userAnswer, correctAnswer) {}

export function gradeQuiz(quizInfo) {
  return quizInfo.filter((el) => el.userAnswer === el.correctAnswer).length;
}

export function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const formatString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
