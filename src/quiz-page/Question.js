import SectionAnswer from "./SectionAnswer";
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
      <SectionQuestion />
      <SectionAnswer />
    </>
  );
}

export default Question;
