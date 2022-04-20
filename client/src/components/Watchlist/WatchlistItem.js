import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import { useState } from 'react';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


const WatchlistItem = (props) => {
  // console.log(" this is props:",props);
  let cleanedUrl = urlSpaceReplacer(props.id)
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('rgb(171, 171, 171)');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])
  return (
      <div>
        <button onClick={() => props.setDeleted(props.id)}> Remove </button>
        <Link to={`/crypto/${cleanedUrl}`} style={{ textDecoration: 'none', color: textColor }}>
          <img src={props.image} alt={props.id} width = '20'/>
          <span>{props.id}</span>
        </Link>
        {/* <span> Current Price: {props.current_price}</span> */}

        {/* <div>
          <span>24 Hour Percentage Change: {props.price_change_percentage_24h}</span>
        </div> */}
        {/* <div>Last Updated: {props.last_updated}</div> */}
        {/* <Fab aria-label="like"  onClick={props.setFav(props.id)}><FavoriteIcon style={{ color: red[500] }}/></Fab> */}
      </div>
  )
}
// localStorage.setItem("userName", response.data.name);
export default WatchlistItem
