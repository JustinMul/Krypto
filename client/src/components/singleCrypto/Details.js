import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import Chart from './Chart';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';

const Details = (props) => {

  return (
    <div>
      {/* <img src={props.details.img} alt={props.details.data.name} width ={100}/>
      <p>{props.details.data.name}</p> */}
    <Grid container  >
      <Grid container direction={'row'} alignItems="center" justifyContent="center" m={2}>
        <Paper sx={{
          p: 1,
          m:3,
          }}>
          <Grid item >
          <p>Genesis Date: {(props.details.data.genesis_date) ? props.details.data.genesis_date : 'N/A'} </p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          }}>
          <Grid item>
          <p>Market Cap Rank: {(props.details.data.market_cap_rank) ? props.details.data.market_cap_rank : "N/A" }</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          }}>
          <Grid item>
          <p>Current Price: ${(props.details.price) ? props.details.price : "N/A"}</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
         }}>
            <Grid item>
            <p>Price Change (24h): {(props.details.priceChange) ? props.details.priceChange : "N/A"}</p> 
            </Grid>
        </Paper>

      </Grid>
      
      <Grid container direction={'row'} alignItems="center" justifyContent="center">
      <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          }}>
          <Grid item>
          <p>Circulating Supply: {(props.details.circulatingSupply) ? props.details.circulatingSupply : "N/A"}</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          }}>
            <Grid item>
            <p>Analyst up sentiment: {(props.details.data.sentiment_votes_up_percentage) ? props.details.data.sentiment_votes_up_percentage : "N/A"}% </p>
            </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          }}>
            <Grid item>
            <p> Analyst down sentiment: {(props.details.data.sentiment_votes_down_percentage) ? props.details.data.sentiment_votes_down_percentage : "N/A"}%</p>
            </Grid>
        </Paper>
      </Grid>

    </Grid>
 
    </div>
  )
}

export default Details