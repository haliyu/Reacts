import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index, hexColor,rgb,weight}) => {
  const [alart, setAlart] = useState(false);
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  console.log(hexValue)
  


  return (<div className='color'
  className={`color ${index > 10 && 'color-light'}`}
  style={{backgroundColor: `rgb(${bcg})`}}
  onClick={()=>{ setAlart(true)
    Navigator.clipboard.writeText(hexValue)
  }}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alart && <p className='alart'>copied to clipboard</p>}
  </div>)
}

export default SingleColor
