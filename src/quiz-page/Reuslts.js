// import { useState } from "react";
import { gradeQuiz } from "../hooks/utilityFunctions";

function Reuslts({ quizResults }) {
  //   const [numCorrect, setNumCorrect] = useState(() => gradeQuiz(quizResults));
  const numCorrect = gradeQuiz(quizResults);

  return (
    <div className="flex justify-center flex-col">
      <span className="text-5xl text-white">
        {`You got ${numCorrect} out of 10 correct!`}
        <strong style={{ color: "#2196f3" }}>{`(${
          (numCorrect / 10) * 100
        }%)`}</strong>
      </span>
      {quizResults.map((el, i) => (
        <div key={i} className="flex justify-center flex-col">
          <div className="text-xl text-white py-4">
            <span className="text-3xl" style={{ color: "#2196f3" }}>
              Question #{`${i + 1}`}{" "}
            </span>
            <span className="text-2xl">{`${el.questions[i].question}`}</span>
          </div>
          <div className="text-xl text-white py-2">{`The correct answer is: ${el.questions[i].correctAnswer}`}</div>
          <div className="text-xl text-white py-2">{`You chose: ${el.userAnswer}`}</div>
        </div>
      ))}
    </div>
  );
}

export default Reuslts;
