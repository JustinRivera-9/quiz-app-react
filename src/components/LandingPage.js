import QuizForm from "./QuizForm";

function LandingPage({ setPage, quizSetup }) {
  function handlePageChange(formData) {
    setPage("quiz");
    quizSetup(formData);
    // console.log(formData);
  }

  return (
    <>
      <div className="flex justify-around px-20 my-16 w-screen">
        <div className="h-72 w-96 bg-zinc-100 shadow-2xl rounded-2xl">
          <h2 className="py-4 text-2xl text-center text-fuchsia-600 font-semibold">
            Customize your quiz
          </h2>
          <p className="px-4 text-xl text-center">
            Select what category you think you can do the best!
            <br></br>
            <br></br>
            If you think you are a know it all - choose our hard option which is
            reserved for those that think they are the smartest.
          </p>
        </div>
        <div className="h-72 w-96 bg-zinc-100 shadow-2xl rounded-2xl">
          <h2 className="py-4 text-2xl text-center text-fuchsia-600 font-semibold">
            Test your knowledge
          </h2>
          <p className="px-4 text-xl text-center">
            Each quiz contains<strong> 10 Questions </strong>. <br></br>
            <br></br> For each question you will get
            <strong> 15 seconds</strong> to submit an answer. <br></br>
            <br></br>Make sure you submit before time ends!
          </p>
        </div>
        <div className="h-72 w-96 bg-zinc-100 shadow-2xl rounded-2xl">
          <h2 className="py-4 text-2xl text-center text-fuchsia-600 font-semibold">
            See where you rank!
          </h2>
          <p className="px-4 text-2xl text-center">
            After you finish - go check out the leadreboards and see how you
            rank compared to everyone else!
          </p>
        </div>
      </div>
      <QuizForm onSubmit={handlePageChange} />
    </>
  );
}

export default LandingPage;
