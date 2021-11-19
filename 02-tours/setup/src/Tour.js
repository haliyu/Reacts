import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removetour}) => {

  const [readmore, setReadmore] = useState(false);
  return(
      <article className='single-tour' key={id}>
            <img src={image} />
            <footer>
                <div className='tour-info'>
                  <h4>{name}</h4>
                  <p className='tour-price'>${price}</p>
                </div>
                <p>{readmore ? info : info.substring(0,199)}
                  <button onClick={()=> setReadmore(!readmore)}>{
                    readmore? 'Show less' : '...Show more'
                  }</button>
                </p>
                <button className='delete-btn' onClick={()=>removetour(id)}>Not Interested</button>
            </footer>
      </article>
  );
};

export default Tour;
