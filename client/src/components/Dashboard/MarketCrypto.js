import React from 'react';
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';

const MarketCrypto = (props) => {
  // console.log("props:",props);
  let cleanedUrl = urlSpaceReplacer(props.name)
  return (
      <li>
        <Link to={`/crypto/${cleanedUrl}`}>
          <img src={props.image} alt={props.id}></img>
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