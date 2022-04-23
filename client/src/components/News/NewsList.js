import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import { Grid } from '@mui/material';
import Box from  '@mui/material/Box';
import SideBarList from '../Dashboard/SideBarList'

import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const NewsList = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
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
    <ThemeProvider theme={darkTheme}>
      <Grid container justifyContent={"center"}>
      <Box sx={{mt:10,mb:5}} display="grid" gridTemplateColumns="repeat(12, 1fr)" columngap="3" rowgap="3">
        <Box gridColumn="span 0.5">
          <SideBarList mode={props.mode} setMode={props.setMode}/>
        </Box>
        <Box gridColumn="span 10">
          {loading ?
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',gridAutoRows: '1fr'}}>
            {newsList}
          </Box> : <CircularProgress/>}
        </Box>
      </Box>
      </Grid>
    </ThemeProvider>
  )
}

export default NewsList