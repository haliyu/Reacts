import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {image, name, job, text} = people[index]

  const checkNumber = (num)=>{
    if (num > people.length -1) {
      return 0
    }
    if (num < 0) {
      return people.length - 1
    }
    return num
  }
  const prevPerson =()=>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }
  
  const nextPerson =()=>{
    setIndex((index)=>{
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }
  const randomPsn =()=>{
    let random = Math.random()
    let personNum = random * (people.length - 1)
    setIndex(Math.round(personNum)) 
  }


  return <article className='review container'>
          <div className='img-container '>
            <img className='person-img' src={image} alt={name} />
            <span className='quote-icon'>
            <FaQuoteRight />
            </span>
          </div>
          <footer>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
          </div>
          <button className='random-btn' onClick={randomPsn}>Suprice Me</button>

      </footer>
  </article>;
};

export default Review;
