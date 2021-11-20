import React from 'react';

const List = ({data, remove}) => {


  return (
   <article>{data.map((person)=>{
     return<div key={person.id} className='person'>
       <img src={person.image}/>
       <div>
          <h4>{person.name}</h4>
          <p>{person.age} years</p>
       </div>
       <button id='btn' onClick={()=>remove(person.id)}>
         Remove
       </button>
     </div>
   })}</article>
  );
};

export default List;
