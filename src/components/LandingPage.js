import QuizForm from "./QuizForm";

function LandingPage({ setPage, quizSetup }) {
  function handlePageChange(formData) {
    setPage("quiz");
    quizSetup(formData);
  }

  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-16 xl:flex-row">
        <div className="w-10/12 mx-auto lg:mt-16">
          <h2
            className="text-4xl text-center font-semibold"
            style={{ color: "#2196f3" }}
          >
            Customize Your Quiz
          </h2>
          <p className="text-2xl text-center text-white mt-4">
            Choose from over 20 quiz catgeories containing more than 4,000
            questions!
          </p>
        </div>
        <div className="w-10/12 mx-auto">
          <h2
            className="text-4xl text-center font-semibold"
            style={{ color: "#2196f3" }}
          >
            Test Your Knowledge
          </h2>
          <p className="text-2xl text-center text-white mt-4">
            Each quiz contains<strong> 10 Questions</strong>
          </p>
        </div>
        <div className="w-10/12 mx-auto">
          <h2
            className="text-4xl text-center font-semibold"
            style={{ color: "#2196f3" }}
          >
            See the Results!
          </h2>
          <p className="text-2xl text-center text-white mt-4">
            After you finish - go through the results to see which questions you
            got correct!
          </p>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <QuizForm onSubmit={handlePageChange} />
      </div>
    </div>
  );
}

export default LandingPage;
