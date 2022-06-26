import React from 'react'

import './Styles/Card.css'

const Card = (props) => {
  
  return (
    <div className='card-container'>
      <img className='card' src={props.data.image} alt='card' loading='lazy'/>
    </div>
  )
}

export default Card