import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
     <div className='container'>
        <div>
            <h3>Questions And Answers About Login</h3>
          </div>
        <div className=''>
        {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </div>
     </div>
    </main>
  );
}

export default App;
