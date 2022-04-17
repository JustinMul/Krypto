import React from 'react'
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';

function TrendingCrypto(props) {
  let cleanedUrl = urlSpaceReplacer(props.name)
  return (
    <li>
      <Link to={`/crypto/${cleanedUrl}`}>
        <img src={props.image} alt={props.name}></img>
      </Link>
      <div>
        <span>{props.name}</span>

        <p>24 Hour Percentage Change: {props.price_change_percentage_24h}</p>
      </div>
      <div>Current Price: {props.current_price}</div>
      <div>Last Updated: {props.last_updated}</div>
    </li>
  )
}

export default TrendingCrypto
