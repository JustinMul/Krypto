import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList'

import CircularProgress from '@mui/material/CircularProgress';
const NewsList = () => {
  const[news, setNews] = useState([])
  const[loading, setLoading] = useState(false)
  const options = {
    method: 'GET',
    url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_HOST_KEY,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    }
  }
  
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setNews(...news,response.data)
      setLoading(true)
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  const newsList = news.map((article)=>{
    
    return (
      <News key={article.title} title={article.title} image={article.image} description={article.desc} date={article.date} source={article.url} />
    )
  })
  return (
    <>
      <Header/>
      <SideBarList/>
      {loading ? newsList : <CircularProgress/>}
      {/* {newsList} */}
    </>
  )
}

export default NewsList