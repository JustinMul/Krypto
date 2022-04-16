

import React from 'react'
import { Link } from 'react-router-dom';
const MarketCrypto = (props) => {
  console.log("props:",props);
  
  return (
      <li>
        <Link to={`/crypto/${props.name.toLowerCase()}`}>
          <img src={props.image} alt={props.name}></img>
        </Link>
        <div>
          <span>{props.name}</span>
          <span>{props.price_change_percentage_24h}</span>
        </div>
        <div>{props.current_price}</div>
        <div>{props.last_updated}</div>
      </li>
  )
}

export default MarketCrypto