import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthday, setBirthday] = useState(data);
  
  const clearAll = ()=>{
    return setBirthday([])
  };
// having error
  const Remove = (id)=>{
    const newData = data.filter((pason)=> pason.id !==id)
    setBirthday(newData)
  };

  return <main>
    <div className='container'>
      <h3>{birthday.length} Birthdays Today</h3>
      <List data={birthday} Remove={Remove} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  </main>;
}

export default App;
