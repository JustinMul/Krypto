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
         <TableCell align="center"  sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Symbol</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Currency</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Current Price</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Change</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Last Updated</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>{(props.dashboard === 'market')? "Add to Watch List" : "Remove"}</TableCell>
        </TableHead>

 
  )
}

export default MarketCryptoHeader