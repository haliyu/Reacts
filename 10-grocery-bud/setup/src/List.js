import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeItem, editItem}) => {


  return <div>
      {items.map((item)=>{
        return(
          <div className='grocery-item' key={item.id}>
            <p className='title'>{item.title}</p>
             <div className='btn-container'>
                <button className='edit-btn' onClick={()=>editItem(item.id)}>
                  <FaEdit />
                </button>
                <button className='delete-btn' onClick={()=> removeItem(item.id)}>
                  <FaTrash />
                </button>
             </div>
          </div>
        )
      })}
  </div>
}

export default List
