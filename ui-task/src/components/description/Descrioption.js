import React from 'react'
import { Link } from 'react-router-dom'

import './Styles/Description.css'

function Descrioption(props) {

  return (
    <div className='details-container'>
      <h1 className='title'>{props.data.title}</h1>
      {/* <p className='author'>{props.data.author}</p> */}
      {/* <p className='date'>{props.data.date}</p> */}
      <p className='details'>{props.data.description}</p>
      <Link to={`/details/${props.data.id}`}><button className='desc-btn' type='button' >{props.data.category}</button></Link>
    </div>
  )
}


export default Descrioption