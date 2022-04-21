import { Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'

const MarketCryptoHeader = () => {
  return (
    <Grid   container direction={"row"} justifyContent="center" columnGap={4}>
      <Typography>Symbol</Typography>
      <Typography>Currency</Typography>
      <Typography>Current Price</Typography>
      <Typography>Change</Typography>
      <Typography>Last Updated</Typography>
      <Typography>Add To Watchlist</Typography>
   </Grid>
  )
}

export default MarketCryptoHeader