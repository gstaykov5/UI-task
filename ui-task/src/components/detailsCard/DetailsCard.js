import React from 'react'

import './Styles/DetailsCard.css'

const DetailsCard = (props) => {
  return (
    <div>
      <div className='details-card-container'>
        <img className='details-card' src={props.data.image} alt='card' loading='lazy'/>
      </div>
    </div>
  )
}

export default DetailsCard