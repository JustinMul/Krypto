import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

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