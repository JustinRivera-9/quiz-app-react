// import { useState } from "react";
import { gradeQuiz, formatString } from "../hooks/utilityFunctions";

function Reuslts({ quizResults }) {
  const numCorrect = gradeQuiz(quizResults);

  return (
    <div className="flex justify-center flex-col pl-8 w-3/4">
      <span className="text-5xl text-white">
        {`You got ${numCorrect} out of 10 correct!`}
        <strong style={{ color: "#2196f3" }}>{` (${
          (numCorrect / 10) * 100
        }%)`}</strong>
      </span>
      <span className="h-1 w-full bg-gray-400 mt-4"></span>

      <div className="flex justify-between w-2/4 mt-2">
        <div className="text-3xl text-gray-400 mx-8">
          {formatString(quizResults[0].difficulty)}
        </div>
        <div className="text-3xl text-gray-400 mx-8">
          {formatString(quizResults[0].category)}
        </div>
      </div>
      {/* <span className="h-1 w-full bg-gray-400 mt-4"></span> */}
      {quizResults.map((el, i) => {
        const isCorrect =
          el.userAnswer === el.questions[el.currentQuestion].correctAnswer;

        return (
          <div key={i} className="flex justify-center flex-col my-4">
            <div className="text-xl text-white py-4 ">
              <span className="text-3xl" style={{ color: "#2196f3" }}>
                Question #{`${i + 1}`}{" "}
              </span>
              <span className="text-2xl">{`${el.questions[i].question}`}</span>
            </div>
            <div
              className="text-xl text-white p-4 w-4/12"
              style={{
                border: "3px solid green",
                borderRadius: "0.75rem",
              }}
            >{`Correct Answer: ${el.questions[i].correctAnswer}`}</div>
            <div
              className="text-xl text-white p-4 w-4/12 mt-4"
              style={{
                border: `3px solid ${isCorrect ? "green" : "red"}`,
                borderRadius: "0.75rem",
              }}
            >{`${isCorrect ? "✅" : "❌"} Your Answer: ${el.userAnswer}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Reuslts;
