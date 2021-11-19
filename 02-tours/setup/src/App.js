import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removetour = (id)=>{
      const newtour = tours.filter((tour)=> tour.id !== id);
      setTours(newtour);
  }
  
  const fetchtour = async ()=>{
    setLoading(true)
      try {
          const response = await fetch(url);
          const tours = await response.json();
          setLoading(false);
          setTours(tours);
      } catch (error) {
          console.log(error);
          setLoading(false)
      }
  };
  
  useEffect(()=>{
    fetchtour();
  },[]);

  if (loading) {
    return(
      <main>
         <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className="btn" onClick={()=>{fetchtour()}}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return(
      <main>
          <Tours tours={tours} removetour={removetour} />
      </main>
  )
}

export default App
