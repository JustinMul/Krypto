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
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>Symbol</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>Currency</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>Current Price</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>Change</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>Last Updated</TableCell>
          <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: '#1976d2', color: 'white'}:{fontWeight: "bold", backgroundColor: "#5E5F6E"}
      }>{(props.dashboard === 'market')? "Add to Watch List" : "Remove"}</TableCell>
        </TableHead>

 
  )
}

export default MarketCryptoHeader