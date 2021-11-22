import React from 'react';

const Menu = ({menus}) => {
  return (
  <div className='section-center'>
    {menus.map((menu)=>{
      return(<div className='menu-item' key={menu.id}>
            <img src={menu.img} className='photo'/>
          <div className='item-info'>
            <header>
              <h4>{menu.title}</h4>
              <h5 className='price'>$ {menu.price}</h5>
            </header>
            <p className='item-text'>{menu.desc}</p>
          </div>
        </div>)
      })}</div>
    )
};

export default Menu;
