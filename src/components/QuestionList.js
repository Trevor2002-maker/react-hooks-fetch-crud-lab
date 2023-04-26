import React,{useState, useEffect}  from "react";


function QuestionList() {
  const [questions, setQuestions] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((response)=>response.json())
    .then(data =>setQuestions(data))
  },[]);
  function handleDeleteButton(){
    fetch(`http://localhost:4000/questions/${questions.id}`,{
      method: "DELETE",
    })
      .then((r)=> r.json())
      .then(()=> console.log("deleted!"))
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
        {questions.map(questions =>(
          <div key={questions.id}>
            <p>{questions.prompt}</p>
            <ul>
              {questions.answers.map(answers =>(
                <li key={answers.index}><br/>{questions.answers}</li>
              ))}
        </ul>
        <button onClick={handleDeleteButton}>Delete Question</button>
          </div>
        ))}
    
    </section>
  );
}

export default QuestionList;
