import React from 'react'

import './Header.css'
import Navbar from './navbar/Navbar'
import Search from './search/Search'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <Search />
    </header>
  )
}

export default Header