import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';


import './Styles/Navbar.css'
import { remove } from '../../../features/newsSlice';

const Navbar = () => {
  const dispatch = useDispatch()

  const removieSearchedNews = () => {
    dispatch(remove())
  }

  return (
    <div className='navbar' onClick={removieSearchedNews}>
      <Link to='./' className='nav-link'>UI Task</Link>
    </div>
  )
}

export default Navbar