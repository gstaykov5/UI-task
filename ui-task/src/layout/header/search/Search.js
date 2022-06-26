import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove, searched } from '../../../features/newsSlice';

import './Styles/Search.css'

const Search = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const findNews = () => {
    dispatch(remove())
    dispatch(searched(search))
    setSearch('')
  }

  return (
    <div className='search'>
      <input 
        type='text' 
        className='search-field' 
        placeholder='search by category or title' 
        onChange={(e) => setSearch(e.target.value)}   
      />
      <button type='button' className='search-btn' onClick={findNews} >Search</button>
    </div>
  )
}

export default Search