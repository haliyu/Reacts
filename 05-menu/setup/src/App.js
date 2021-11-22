import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =['all',...new Set(items.map((item)=> item.category)) ] 


function App() {
  const [menus, setMenus] = useState(items);
  const [category, setCategory] = useState(allCategories);

  
  const filter =(categore)=>{
    if (categore ==='all') {
      return setMenus(items)
    }
    const newCtg = items.filter((item)=>
      item.category === categore
    )
    setMenus(newCtg)
  }

  return <main className='menu'>
    <section className='section'>
      <div  className='title'>
        <h2>Our Menus</h2>
        <div className='underline'></div>
      </div>
      <Categories buttons={filter} categorys={category} />
      <Menu menus={menus}/>
    </section>
  </main>
}

export default App;
