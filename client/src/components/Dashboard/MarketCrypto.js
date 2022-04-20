import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red,grey } from '@mui/material/colors';


const MarketCrypto = (props) => {
  let cleanedUrl = urlSpaceReplacer(props.id)

  return (
      <div>
        <Link to={`/crypto/${cleanedUrl}`}>
          <img src={props.image} alt={props.id} width="50"/>
        </Link>
          <span> {props.name} </span>
          {/* <span style={{ color: grey[500] }}> {props.id} </span> */}
        <Fab aria-label="like"  onClick={() => props.setFav([props.id, props.image])}><FavoriteIcon style={{ color: red[500] }}/></Fab>
        <div>
        </div>
        <div>Current Price: {props.current_price}</div>
        <span>Percentage Change (24h): {Math.round(props.price_change_percentage_24h)}%</span>
        <div>Last Updated: {(props.last_updated)} </div>
      </div>
  )
}

export default MarketCrypto