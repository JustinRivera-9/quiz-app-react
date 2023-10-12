function SectionQuestion({ quizData }) {
  const { questions, numCorrect, currentQuestion } = quizData;

  return (
    <>
      <div className="text-white text-4xl w-full">{`${questions[currentQuestion].question}`}</div>
      <div className="text-white text-2xl">
        {questions[currentQuestion].answersArr.map((answer, i) => (
          <div className="w-3/4" key={i}>{`${answer}`}</div>
        ))}
      </div>
      ;
    </>
  );
}

export default SectionQuestion;
