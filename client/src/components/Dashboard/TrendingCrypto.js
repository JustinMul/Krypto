import React from 'react'
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import { Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

function TrendingCrypto(props) {
  let cleanedUrl = urlSpaceReplacer(props.id)
  return (
        
    <div>
      <Grid  style={{flexWrap: 'wrap'}} >
        {/* <Link to={`/crypto/${cleanedUrl}`}>
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
        </Link> */}

         <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
    
   
      <Grid container spacing={0}>
        <Grid item>
          <ButtonBase sx={{ width: 50, height: 100 }}>
          <Link to={`/crypto/${cleanedUrl}`}><img src={props.image} alt={props.name} width="50"/>  </Link>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {props.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              ${props.current_price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              {props.last_updated}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            {Math.round(props.price_change_percentage_24h)}%
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    
    </Paper>
      </Grid>
    </div>
  )
}

export default TrendingCrypto
