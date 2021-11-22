import React from 'react';

const Categories = ({buttons, categorys}) => {

  return <section>
    <div className='btn-container'>
      {categorys.map((category,index)=>{
        return <button className='filter-btn' key={index} onClick={()=> buttons(category)}>
           {category}</button>
      })}
    </div>
  </section>
};

export default Categories;
