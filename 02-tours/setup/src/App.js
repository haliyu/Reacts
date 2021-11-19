import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchtour = async ()=>{
    setLoading(true)
      try {
          const response = await fetch(url);
          const tours = response.json();
          setTours(tours);
          setLoading(false)
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
      <Loading />
    )
  }


  return <>
      <Tours tours={tours} />
  </>
}

export default App
