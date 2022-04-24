import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import { Grid } from '@mui/material';
import Box from  '@mui/material/Box';
import SideBarList from '../Dashboard/SideBarList'
import { Typography } from '@mui/material';

const NewsList = (props) => {

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
      setTimeout(()=>{
        setLoading(true)
      }, 1000)
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  const newsList = news.map((article)=>{
    
    return (
      
      <News key={article.title} title={article.title} image={article.image} description={article.desc} date={article.date} source={article.url} loading={loading}/>
      
    )
  })
  const newsLoadingData = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30]];
  const newsLoading = newsLoadingData.map((article)=>{
    
    return (
      
      <News key={article[0]} loading={loading}/>
      
    )
  })

  return (

          <Grid container justifyContent={"center"} display='flex' direction='column' mt={10}>
          <Typography fontSize={25} textAlign='center'>KRYPTO TIMES : DECRYPT THE CRYPTO</Typography> 
      <Box sx={{mt:10,mb:5}} display="grid" gridTemplateColumns="repeat(12, 1fr)" columngap="3" rowgap="3">
        <Box gridColumn="span 0.5">
          <SideBarList mode={props.mode} setMode={props.setMode}/>
        </Box>
        <Box gridColumn="span 10">


            {(loading) ? <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',gridAutoRows: '1fr'}}>{newsList} </Box>: <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',gridAutoRows: '1fr'}}>{newsLoading} </Box>}

        </Box>
      </Box>
      </Grid>

  )
}

export default NewsList