import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage =()=>{
  let list = localStorage.getItem('list')
  if (list) {
    return list= JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
};
function App() {
  const [alert, setAlert] = useState({show:false, msg:"", type:''});
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState(getLocalStorage());

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Please enter a value')
    }else if (name && isEdit) {
      setList(list.map((item)=>{
        if (item.id===editId) {
          return {...item, title: name}
        }
        return item
      }))
      setName('');
      setEditId(null);
      setIsEdit(false);
      showAlert(true, 'success', 'item changed')
    }else{
      showAlert(true, 'success', 'Item added to the list')
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('')
    }
  };
  const removeItem = (id)=>{
    showAlert(true, 'danger', 'Item deleted');
    setList(list.filter((item)=>item.id !==id))
  }
  const clearAll =()=>{
    showAlert(true, 'danger', 'All Items deleted')
    setList([])
  }
  const showAlert =(show = false, type='', msg= '')=>{
    setAlert({show, type, msg})
  }
  const editItem=(id)=>{
    const specificItem = list.find((item)=> item.id === id)
    setEditId(id);
    setIsEdit(true)
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list]);
  return(
    <div className='section-center '>
       <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
          <h3>grocery bud</h3>
          <div className='form-control'>
            <input
            type='text'
            value={name}
            className='grocery'
            placeholder='e.g. eggs'
            onChange={(e)=> setName(e.target.value)}/>
            <button className='submit-btn' type='submit'>{isEdit? 'Edit':'Submit'}</button>
          </div>
       </form>
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
      </div>
      {list.length>0 && <button className='clear-btn' onClick={clearAll}>Clear All</button>}
    </div>
  )
}

export default App
