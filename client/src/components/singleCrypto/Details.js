import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';

const Details = (props) => {
  
  return (
    <div>
      <img src={props.details.img} alt={props.details.data.name}/>
      <p>{props.details.data.name}</p>
      {/* {props.details.description} */}
      <p>Genesis Date: {(props.details.data.genesis_date) ? props.details.data.genesis_date : 'N/A'} </p> 
      <p>Market Cap Rank: {(props.details.data.market_cap_rank) ? props.details.data.market_cap_rank : "N/A" }</p> 
      <p>Circulating Supply: {(props.details.circulatingSupply) ? props.details.circulatingSupply : "N/A"}</p> 
      <p>Current Price: ${(props.details.price) ? props.details.price : "N/A"}</p> 
      <p>Price Change (24h): {(props.details.priceChange) ? props.details.priceChange : "N/A"}</p> 
      <p>Analyst up sentiment: {(props.details.data.sentiment_votes_up_percentage) ? props.details.data.sentiment_votes_up_percentage : "N/A"}% </p>
      <p> Analyst down sentiment: {(props.details.data.sentiment_votes_down_percentage) ? props.details.data.sentiment_votes_down_percentage : "N/A"}%</p>
      <Fab  aria-label="like">
        <FavoriteIcon style={{ color: red[500] }}/>
      </Fab>
    </div>
  )
}

export default Details
