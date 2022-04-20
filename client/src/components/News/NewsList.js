import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const NewsList = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
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
    <ThemeProvider theme={darkTheme}>
    <div>
      <Header mode={props.mode} setMode={props.setMode}/>
      <SideBarList mode={props.mode} setMode={props.setMode}/>
      <div className='testing'>
      {newsList}
      </div>
    </div>
    </ThemeProvider>
  )
}

export default NewsList