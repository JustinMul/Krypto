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

const MarketCryptoHeader = (props) => {
  return (
      <TableHead >
         <TableCell align="left"  sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>Symbol</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>Currency</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>Current Price</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>Change</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>Last Updated</TableCell>
          <TableCell align="left" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(134, 134, 134)', color: "white", fontWeight: "bold"}
      }>{(props.dashboard === 'market')? "Add to Watch List" : "Remove"}</TableCell>
        </TableHead>

 
  )
}

export default MarketCryptoHeader