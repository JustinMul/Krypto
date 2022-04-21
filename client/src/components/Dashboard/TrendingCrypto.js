import React from 'react'
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import { Grid } from '@mui/material';

function TrendingCrypto(props) {
  let cleanedUrl = urlSpaceReplacer(props.id)
  return (
    <div>

      <Grid>
        <Link to={`/crypto/${cleanedUrl}`}>
          <Grid>

            <Grid container justifyContent="center">
            <img src={props.image} alt={props.name} width="50"/>
            </Grid>

            <Grid>
            <span> {props.name}</span>
            </Grid>

              <Grid>
              <span>Percentage Change (24h): {Math.round(props.price_change_percentage_24h)}%</span>
              </Grid>

              <Grid>
            <div>Current Price: {props.current_price}</div>
            </Grid>

            <Grid>
            <div>Last Updated: {props.last_updated}</div>
            </Grid>

         </Grid>
        </Link>
      </Grid>
    </div>
  )
}

export default TrendingCrypto
