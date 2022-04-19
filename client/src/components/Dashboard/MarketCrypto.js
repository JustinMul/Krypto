import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import { useState } from 'react';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


const MarketCrypto = (props) => {
  // console.log("props:",props);
  let cleanedUrl = urlSpaceReplacer(props.id)
 
  return (
      <li>
        <Link to={`/crypto/${cleanedUrl}`}>
          <img src={props.image} alt={props.id}></img>
        </Link>
        <div>
          <span>{props.name}</span>
          <span>24 Hour Percentage Change: {props.price_change_percentage_24h}</span>
        </div>
        <div>Current Price: {props.current_price}</div>
        <div>Last Updated: {props.last_updated}</div>
        <button onClick={() => props.setFav(props.id)}> Add to Favourties</button>
        {/* <Fab aria-label="like"  onClick={props.setFav(props.id)}><FavoriteIcon style={{ color: red[500] }}/></Fab> */}
      </li>
  )
}
// localStorage.setItem("userName", response.data.name);
export default MarketCrypto