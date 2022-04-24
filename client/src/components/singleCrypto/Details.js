import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import Chart from './Chart';
import { Grid, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import DateRangeIcon from '@mui/icons-material/DateRange';

import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CachedIcon from '@mui/icons-material/Cached';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

import DonutSmallIcon from '@mui/icons-material/DonutSmall'
import EqualizerIcon from '@mui/icons-material/Equalizer';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'; 
import SentimentVeryDissatisfiedIcon from'@mui/icons-material/SentimentVeryDissatisfied';


const Details = (props) => {
console.log(props.details)
  return (
    <div>
      {/* <img src={props.details.img} alt={props.details.data.name} width ={100}/>
      <p>{props.details.data.name}</p> */}
    <Grid container  >
    
      <Grid container direction={'row'} alignItems="center" justifyContent="center" mb={2}>
      
        <Paper  sx={{
          p: 1,
          m:3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid container direction={'column'} alignItems={'center'}>
            <Grid item><DateRangeIcon/></Grid>
            <Grid item>Genesis Date </Grid> 
            <Grid item>{(props.details.data.genesis_date) ? props.details.data.genesis_date : 'N/A'} </Grid>  
          </Grid>
        </Paper>
        <Paper sx={{
            p: 1,
            m:3,
            width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <Grid item> <ShowChartIcon/>  </Grid>
              <Grid item> Market Cap</Grid>
              <Grid item>  ${(props.details.data.market_data.market_cap.cad) ? props.details.data.market_data.market_cap.cad : "N/A"} </Grid>
            </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid container direction={'column'} alignItems={'center'}>
            <Grid item><EqualizerIcon/></Grid>
            <Grid item> Market Cap Rank </Grid>
            <Grid item> {(props.details.data.market_cap_rank) ? props.details.data.market_cap_rank : "N/A" }</Grid>
          </Grid>
        </Paper>
       
        <Paper sx={{
          p: 1,
          m:3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid container direction={'column'} alignItems={'center'}>
            <Grid item> <CachedIcon/> </Grid>
            <Grid item>Circulating Supply</Grid>
            <Grid item> {(props.details.circulatingSupply) ? Math.round(props.details.circulatingSupply) : "N/A"}</Grid>
          </Grid>
        </Paper>

      </Grid>
      
      <Grid container direction={'row'} alignItems="center" justifyContent="center">
      <Paper sx={{
            p: 1,
            m:3,
            mt:-3,
            width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid container direction={'column'} alignItems={'center'}>
            <Grid item> <AttachMoneyIcon/> </Grid>
            <Grid item> Current Price </Grid>
            <Grid item> ${(props.details.price) ? props.details.price : "N/A"}</Grid>
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <Grid item> <PriceChangeIcon/> </Grid>
              <Grid item>Price Change (24h) </Grid>
              <Grid item>${(props.details.priceChange) ? props.details.priceChange : "N/A"}</Grid>
            
            </Grid>
        </Paper>
   
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <Grid item> < SentimentSatisfiedAltIcon/> </Grid>
              <Grid item> Analyst up sentiment: </Grid>
              <Grid item>  {(props.details.data.sentiment_votes_up_percentage) ? props.details.data.sentiment_votes_up_percentage : "N/A"}% </Grid>
            </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          width:200,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <Grid item> <SentimentVeryDissatisfiedIcon/> </Grid>
              <Grid item> Analyst down sentiment:</Grid>
              <Grid item>  {(props.details.data.sentiment_votes_down_percentage) ? props.details.data.sentiment_votes_down_percentage : "N/A"}% </Grid>
            </Grid>
        </Paper>
     
      </Grid>

    </Grid>
 

 
    </div>
  )
}

export default Details

     {/* <Fab  aria-label="like">
        <FavoriteIcon style={{ color: red[500] }}/>
      </Fab> */}