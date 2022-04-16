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

        <p>{props.price_change_percentage_24h}</p>
      </div>
      <div>{props.current_price}</div>
      <div>{props.last_updated}</div>
    </li>
  )
}

export default TrendingCrypto
