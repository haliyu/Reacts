import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs , setJobs] = useState([]);
  const [value, setValue] = useState(1);

  const mydata = async () => {
    const res = await fetch(url);
    const newJobs = await res.json()
    setJobs(newJobs);
    setLoading(false);
  }
  useEffect(()=>{
    
  mydata();
  },[])

  if (loading) {
    return<div className="loading section">
      <h1>Loadind...</h1>
    </div>
  }

  const {duties, company, id, dates, title, index} = jobs[value]

  return(
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center ">
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((items, index)=>{
            return <button key={items.id} 
            onClick={()=>setValue(index)}
            className={`job-btn ${index === value && 'active-btn'}`}>
            {items.company}</button>
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index)=>{
           return<div key={index} className='job-desc'>
             <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
             <p>{duty}</p>
           </div>
          })}
        </article>
      </div>
    </section>
  )
}

export default App
