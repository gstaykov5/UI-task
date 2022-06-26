import React from 'react'

import './Styles/DetailsDesc.css'

const DetailsDesc = (props) => {
  return (
    <div>
      <div className='details-desc'>
        <h1 className='title'>{props.data.title}</h1>
        <p className='author'>by {props.data.author}</p>
        <p className='date'>{props.data.date}</p>
        <p className='description'>{props.data.description}</p>
      </div>
    </div>
  )
}

export default DetailsDesc