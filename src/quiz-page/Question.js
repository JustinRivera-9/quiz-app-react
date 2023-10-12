import SectionProgress from "./SectionProgress";
import SectionQuestion from "./SectionQuestion";

function Question({ quizData }) {
  return (
    <>
      <SectionProgress
        curQuestion={quizData.currentQuestion}
        category={quizData.category}
        difficulty={quizData.difficulty}
      />
      <div className="ml-52 my-16 flex flex-col justify-center w-3/5">
        <SectionQuestion quizData={quizData} />
      </div>
    </>
  );
}

export default Question;
