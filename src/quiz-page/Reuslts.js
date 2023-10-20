// import { useState } from "react";
import { gradeQuiz, formatString } from "../hooks/utilityFunctions";

function Reuslts({ quizResults, quizInfo }) {
  const numCorrect = gradeQuiz(quizResults);

  return (
    <div className="flex mx-auto flex-col w-full px-2 md:w-8/12 lg:w-1/2">
      <span className="text-4xl text-white text-center">
        {`You got ${numCorrect} out of 10 correct!`}
      </span>
      <span className="h-1 w-full bg-gray-400 mt-4"></span>

      <div className="flex justify-between mt-2">
        <div className="text-lg text-gray-400 text-center w-1/4">
          {formatString(quizInfo.category)}
        </div>
        <div
          className="text-2xl text-center lg:pr-28"
          style={{ color: "#2196f3" }}
        >{` (${(numCorrect / 10) * 100}%)`}</div>
        <div className="text-lg text-center text-gray-400">
          {formatString(quizInfo.difficulty)}
        </div>
      </div>
      {quizResults.map((el, i) => {
        return (
          <div key={i} className="flex flex-col mx-auto w-full px-2 pb-8">
            <div className="py-4">
              <span className="text-2xl" style={{ color: "#2196f3" }}>
                Question #{`${i + 1}: `}
              </span>
              <span className="text-xl text-white">{`${el.question}`}</span>
            </div>
            {el.answersArr.map((answer, i) => {
              const isCorrect =
                answer === (el.userAnswer && el.correctAnswer) ? true : false;
              ////// USER ANSWER
              if (answer === el.userAnswer) {
                return (
                  <div
                    key={answer}
                    className="text-xl text-white p-4 mt-2"
                    style={{
                      border: `4px solid ${isCorrect ? "green" : "red"}`,
                      borderRadius: "0.75rem",
                    }}
                  >{`${isCorrect ? "✅" : "❌"} Your Answer: ${answer}`}</div>
                );
              }

              ////// IF USER ANSWER IS INCORRECT
              if (answer === el.correctAnswer) {
                return (
                  <div
                    key={answer}
                    className="text-xl text-white p-4 mt-2"
                    style={{
                      border: "4px solid green",
                      borderRadius: "0.75rem",
                    }}
                  >{`Correct Answer: ${answer}`}</div>
                );
              }

              return (
                <div
                  key={answer}
                  className="text-xl text-white p-4 mt-2"
                  style={{
                    border: "2px solid gray",
                    borderRadius: "0.75rem",
                  }}
                >{`${answer}`}</div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Reuslts;
