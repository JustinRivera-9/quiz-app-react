import QuizForm from "./QuizForm";

function LandingPage({ setPage, quizSetup }) {
  function handlePageChange(formData) {
    setPage("quiz");
    quizSetup(formData);
  }

  return (
    <div className="flex flex-wrap justify-around px-20 mt-16 w-screen h-full">
      <div className="h-72 w-96">
        <h2
          className="py-4 text-4xl text-center font-semibold"
          style={{ color: "#2196f3" }}
        >
          Customize Your Quiz
        </h2>
        <p className="px-4 text-2xl text-center text-white">
          Choose from over 20 quiz catgeories containing more than 4,000
          questions!<br></br>
          <br></br>
          Each category has an option for easy, medium or hard
        </p>
      </div>
      <div className="h-72 w-96">
        <h2
          className="py-4 text-4xl text-center font-semibold"
          style={{ color: "#2196f3" }}
        >
          Test Your Knowledge
        </h2>
        <p className="px-4 text-2xl text-center text-white">
          Each quiz contains<strong> 10 Questions</strong> <br></br>
          <br></br> For each question you will get
          <strong> 15 seconds</strong> to submit an answer.
        </p>
      </div>
      <div className="h-72 w-96">
        <h2
          className="py-4 text-4xl text-center font-semibold"
          style={{ color: "#2196f3" }}
        >
          See the Results!
        </h2>
        <p className="px-4 text-2xl text-center text-white">
          After you finish - go through the results to see which questions you
          got correct!
        </p>
      </div>
      <div className="mx-40">
        <QuizForm onSubmit={handlePageChange} />
      </div>
    </div>
  );
}

export default LandingPage;
