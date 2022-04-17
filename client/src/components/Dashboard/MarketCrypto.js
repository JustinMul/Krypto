import React from 'react';
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';

const MarketCrypto = (props) => {
  // console.log("props:",props);
  let cleanedUrl = urlSpaceReplacer(props.name)
  return (
      <li>
        <Link to={`/crypto/${cleanedUrl}`}>
          <img src={props.image} alt={props.name}></img>
        </Link>
        <div>
          <span>{props.name}</span>
          <span>24 Hour Percentage Change: {props.price_change_percentage_24h}</span>
        </div>
        <div>Current Price: {props.current_price}</div>
        <div>Last Updated: {props.last_updated}</div>
      </li>
  )
}

export default MarketCrypto