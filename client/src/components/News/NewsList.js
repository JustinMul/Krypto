import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList'

const NewsList = () => {
  const [news, setNews] = useState([])
  const options = {
    method: 'GET',
    url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_HOST_KEY,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    }
  }
  console.log("HOST:",process.env.REACT_APP_HOST_KEY,)
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setNews(...news,response.data)
    }).catch(function (error) {
      console.error(error);
    });
  },[]);
  const newsList = news.map((article)=>{

    return (
      <News key={article.title}title={article.title} image={article.image} description={article.desc} date={article.date} source={article.url} />
    )
  })
  return (
    <div>
      <Header/>
      <SideBarList/>
      {newsList}
    </div>
  )
}

export default NewsList