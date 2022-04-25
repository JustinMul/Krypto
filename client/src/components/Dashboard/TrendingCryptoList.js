import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import '../../index.css'

import TrendingCrypto from './TrendingCrypto';

export default function TrendingCryptoList(props) {


  const trendingCrypto = props.data.map((crypto)=>{
    return (
      
          <TrendingCrypto
          key = {crypto.id}
          id={crypto.id}
          image={crypto.image}
          name={crypto.name}
          price_change_percentage_24h={crypto.price_change_percentage_24h}
          current_price={crypto.current_price}
          last_updated={crypto.last_updated}
          mode={props.mode}
          />

    );
  });

  return (
    // <div className="rowTest">
    
    <Grid container direction={"row"}>
      {trendingCrypto}
    </Grid>

   
  )
}