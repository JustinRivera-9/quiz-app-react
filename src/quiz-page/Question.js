import { useState } from "react";
import SectionProgress from "./SectionProgress";

function Question({ quizData }) {
  return (
    <>
      <SectionProgress
        curQuestion={quizData.currentQuestion}
        category={quizData.category}
        difficulty={quizData.difficulty}
      />
      <div className="ml-52 my-16 flex flex-col justify-center w-3/5"></div>
    </>
  );
}

export default Question;
