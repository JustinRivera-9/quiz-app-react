export function answerStyles(userAnswer, correctAnswer) {}

export function gradeQuiz(quizInfo) {
  return quizInfo.filter(
    (el) => el.userAnswer === el.questions[el.currentQuestion].correctAnswer
  ).length;
}

export function resultsAnswerStyle(exp) {
  return exp ? { border: "3px solid green" } : { border: "3px solid red" };
}
