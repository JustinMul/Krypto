import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red,grey } from '@mui/material/colors';
import { Grid } from '@mui/material';

const MarketCrypto = (props) => {
  let cleanedUrl = urlSpaceReplacer(props.id)

  return (
      <div >
    <Grid container direction={"row"} justifyContent="center" columnGap={4}>
        <Link to={`/crypto/${cleanedUrl}`}>
          <Grid container direction={"row"} justifyContent={"end"} columnGap={4}>
          
          <Grid justifyContent={'flex-end'}>
              <img src={props.image} alt={props.id} width="50"/>
          </Grid> 

          <Grid>
            <span> {props.name} </span>
          </Grid>

          <Grid>
            <div>{props.current_price}</div>
          </Grid>

          <Grid>
            <span>{Math.round(props.price_change_percentage_24h)}%</span>
          </Grid>
          <Grid>
            <div>{(props.last_updated)} </div>
          </Grid>
          </Grid>   
        </Link>
            <Fab aria-label="like"  onClick={() => props.setFav([props.id, props.image])}><FavoriteIcon style={{ color: red[500] }}/></Fab>
    </Grid>
      </div>

  )
}

export default MarketCrypto