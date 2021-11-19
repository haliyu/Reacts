import React, { useState } from 'react';

const Tour = ({id, image, info, name, price}) => {
  return(
      <article className='single-tour' key={id}>
            <img src={image} />
            <footer>
                <div className='tour-info'>
                  <h4>{name}</h4>
                  <p>{price}</p>
                </div>
                <p>{info}</p>
                <button className='delete-btn'>Not Interested</button>
            </footer>
      </article>
  );
};

export default Tour;
