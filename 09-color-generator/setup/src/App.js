import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#D47AE8').all(10));
  const [error, setError] = useState(false);

  const handle = (e)=>{
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (<main>
    <form className='container' onSubmit={handle}>
      <h3>Color Generator</h3>
      <input 
      type='text'
      onChange={(e)=> setColor(e.target.value)}
      placeholder='#D47AE8'
      value={color}

      />
      <button className='btn' type='submit'>Submit</button>
    </form>
    <div className='colors'>{
      list.map((color,index)=>{
        return<SingleColor 
        key={index}
        {...color}
        index={index}
        hexColor={color.hex}
        />
      })}</div>
  </main>)
}

export default App
