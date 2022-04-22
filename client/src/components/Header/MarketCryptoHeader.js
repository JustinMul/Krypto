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

      <TableHead >
         <TableCell align="left"  sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Symbol</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Currency</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Current Price</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Change</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Last Updated</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Add To Watchlist</TableCell>
        </TableHead>

 
  )
}

export default MarketCryptoHeader