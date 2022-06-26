import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import DetailsCard from '../../components/detailsCard/DetailsCard';
import DetailsDesc from '../../components/detailsDesc/DetailsDesc';
import { getNews } from '../../features/newsSlice';

import './Styles/Details.css'


const Details = () => {
  const newsID = useParams();
  const [singleNews, setSingleNews] = useState();

  const news = useSelector(getNews);

  useEffect(() => {
    const res = news.filter(el => el.id === newsID.id);
    setSingleNews(res);
  }, [newsID.id])
  
  return (
    <section>
      {singleNews && singleNews.map((el, i)=> (
        <div key={i} className='details'>
          <DetailsCard data={el} />
          <DetailsDesc data={el} />
        </div>
      ))}
    </section>
  )
}

export default Details