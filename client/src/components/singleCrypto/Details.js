import React from 'react'

const Details = (props) => {
  
  return (
    <div>
      <img src={props.details.img} alt={props.details.data.name}/>
      <p>{props.details.data.name}</p>
      {/* {props.details.description} */}
      <p>Genesis Date: {(props.details.data.genesis_date) ? props.details.data.genesis_date : 'N/A'} </p> 
      <p>Market Cap Rank: {props.details.data.market_cap_rank}</p> 
      <p>Circulating Supply: {props.details.circulatingSupply}</p> 
      <p>Current Price: ${props.details.price}</p> 
      <p>Price Change (24h): {props.details.priceChange}</p> 
      <p>Analyst up sentiment: {props.details.data.sentiment_votes_up_percentage}% </p>
      <p> Analyst down sentiment: {props.details.data.sentiment_votes_down_percentage}%</p>
    </div>
  )
}

export default Details
