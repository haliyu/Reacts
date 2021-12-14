import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert}) => {
  useEffect(() => {
    const setTime = setTimeout(()=>{
      removeAlert();
    },3000);
    return clearTimeout(()=> setTime)
  }, []);
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
