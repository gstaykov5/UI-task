import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/card/Card'
import Descrioption from '../../components/description/Descrioption'
import { fetchNews, getNews, remove, searchNews } from '../../features/newsSlice';

import './Styles/Post.css'

function Post() {
  const [searchedNews, setSearchedNews] = useState([]);
  
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  const search = useSelector(searchNews);
  
  useEffect(() => {
    dispatch(remove())
    dispatch(fetchNews())
  }, [])
  
  useEffect(() => {
    const s = news.filter(el => {
      return el.title.includes(search) || el.category.includes(search)
    })
    
    setSearchedNews(s)
  }, [search, news])
  

  return (
    <div className='posts-container'>
      {searchedNews.length > 0 ? (searchedNews.map((d, i) => (
        <div key={i} className='posts'>
          <Card data={d} />
          <Descrioption data={d} />
        </div>
      )))
     :
     (news.map((d, i) => (
        <div key={i} className='posts'>
          <Card data={d} />
          <Descrioption data={d} />
        </div>
      )))}

    </div>
  )
}

export default Post