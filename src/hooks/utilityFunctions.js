export function answerStyles(userAnswer, correctAnswer) {}

export function gradeQuiz(quizInfo) {
  return quizInfo.filter(
    (el) => el.userAnswer === el.questions[el.currentQuestion].correctAnswer
  ).length;
}
