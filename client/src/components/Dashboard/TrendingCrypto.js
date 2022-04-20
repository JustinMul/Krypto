import React from 'react'
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';

function TrendingCrypto(props) {
  let cleanedUrl = urlSpaceReplacer(props.id)
  return (
    <div>
      <Link to={`/crypto/${cleanedUrl}`}>
        <img src={props.image} alt={props.name} width="50"/>
      </Link>
        <span> {props.name}</span>
      <div>
        <span>Percentage Change (24h): {Math.round(props.price_change_percentage_24h)}%</span>
      </div>
      <div>Current Price: {props.current_price}</div>
      <div>Last Updated: {props.last_updated}</div>
    </div>
  )
}

export default TrendingCrypto
