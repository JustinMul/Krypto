import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red,grey } from '@mui/material/colors';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {useState, useEffect} from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {dateConvert} from '../../helpers/dateConvert';
import ClearIcon from '@mui/icons-material/Clear';

import '../../index.css'

const MarketCrypto = (props) => {
  let cleanedUrl = urlSpaceReplacer(props.id)
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('white');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  return (


    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
    
      <TableCell component="th" scope="row">
      <Link to={`/crypto/${cleanedUrl}`}><img src={props.image} alt={props.id} width="50"/></Link>
      </TableCell>
      <TableCell align="left"><Link to={`/crypto/${cleanedUrl}`} style={{ textDecoration: 'none', color: textColor}}>{props.name}</Link></TableCell>
      <TableCell align="left"> <Link to={`/crypto/${cleanedUrl}`} style={{ textDecoration: 'none', color: textColor}}>$ {(props.current_price)}</Link></TableCell>
      <TableCell align="left"><Link to={`/crypto/${cleanedUrl}`} style={{ textDecoration: 'none', color: (Math.round(props.price_change_percentage_24h) > 0) ? "green" : "red"}}><div className='shiftdown'>{Math.round(props.price_change_percentage_24h)}% {(Math.round(props.price_change_percentage_24h) > 0) ?<div className='flexdown'><FileUploadIcon/></div>: <div className='flexdown'><FileDownloadIcon/> </div>}</div></Link></TableCell>
      <TableCell align="left"> <Link to={`/crypto/${cleanedUrl}`} style={{ textDecoration: 'none', color: textColor}}>{dateConvert(props.last_updated)}</Link></TableCell>

        { (props.dashboard === "watchlist") ?
                <TableCell>
                <Button aria-label="like"  onClick={() => props.setDeleted(props.id)}>
                  <ClearIcon style={{ color: red[500] }}/>
                  </Button>
                  </TableCell>
:
<TableCell><Button aria-label="like"  onClick={() => props.setFav([props.id, props.image])}>
<FavoriteIcon style={{ color: red[500] }}/>
</Button></TableCell> 
        }


    </TableRow>

      


  
//       <div >
// <Grid container direction={"row"} columnGap={4} justifyContent={"start"}>
//         <Link to={`/crypto/${cleanedUrl}`}>
//           <Grid container direction={"row"}  columnGap={4} backgroundColor =textColor>
          
//           <Grid justifyContent={'start'} >
//               <img src={props.image} alt={props.id} width="50"/>
//           </Grid> 

//           <Grid>
//             <span> {props.name} </span>
//           </Grid>

//           <Grid>
//             <div>{props.current_price}</div>
//           </Grid>

//           <Grid>
//             <span>{Math.round(props.price_change_percentage_24h)}%</span>
//           </Grid>
//           <Grid>
//             <div>{(props.last_updated)} </div>
//           </Grid>
//           </Grid>   
//         </Link>
//             <Fab aria-label="like"  onClick={() => props.setFav([props.id, props.image])}><FavoriteIcon style={{ color: red[500] }}/></Fab>
//             </Grid>
//       </div>

  )
}

export default MarketCrypto