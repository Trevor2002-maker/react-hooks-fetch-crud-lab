import React,{useState, useEffect}  from "react";


function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => {
        console.log('Questions fetched successfully:', data);
        setQuestions(data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);
  return (
    <section>
      <h1>Quiz Questions</h1>
        {questions.map(questions =>(
          <div key={questions.id}>
            <p>{questions.prompt}</p>
            <ul>
              {questions.answers.map(answers =>(
                <li key={answers.index}><br/>{questions.answers}
                </li>
              ))}
        </ul>
        <button>Delete Question</button>
          </div>
        ))}
    
    </section>
  );
}

export default QuestionList;