import { Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const MarketCryptoHeader = () => {
  return (
   
      <TableHead>
         <TableCell align="left">Symbol</TableCell>
          <TableCell align="left">Currency</TableCell>
          <TableCell align="left">Current Price</TableCell>
          <TableCell align="left">Change</TableCell>
          <TableCell align="left">Last Updated</TableCell>
          <TableCell align="left">Add To Watchlist</TableCell>
        </TableHead>
 
  )
}

export default MarketCryptoHeader