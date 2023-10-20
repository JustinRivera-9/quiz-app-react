// import { useState } from "react";
import { gradeQuiz, formatString } from "../hooks/utilityFunctions";

function Reuslts({ quizResults, quizInfo }) {
  console.log(quizResults, quizInfo);
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
          {formatString(quizInfo.difficulty)}
        </div>
        <div className="text-3xl text-gray-400 mx-8">
          {formatString(quizInfo.category)}
        </div>
      </div>
      {quizResults.map((el, i) => {
        return (
          <div key={i} className="flex justify-center flex-col my-4">
            <div className="text-xl text-white py-4 ">
              <span className="text-3xl" style={{ color: "#2196f3" }}>
                Question #{`${i + 1}`}
              </span>
              <span className="text-2xl">{` ${el.question}`}</span>
            </div>
            {el.answersArr.map((answer, i) => {
              const isCorrect =
                answer === (el.userAnswer && el.correctAnswer) ? true : false;
              ////// USER ANSWER
              if (answer === el.userAnswer) {
                return (
                  <div
                    key={answer}
                    className="text-xl text-white p-4 w-4/12 mt-4"
                    style={{
                      border: `5px solid ${isCorrect ? "green" : "red"}`,
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
                    className="text-xl text-white p-4 w-4/12 mt-4"
                    style={{
                      border: "5px solid green",
                      borderRadius: "0.75rem",
                    }}
                  >{`Correct Answer: ${answer}`}</div>
                );
              }

              return (
                <div
                  key={answer}
                  className="text-xl text-white p-4 w-4/12 mt-4"
                  style={{
                    border: "3px solid gray",
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
