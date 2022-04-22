import { useState, useEffect } from 'react';
import axios from 'axios';
import MarketCrypto from './MarketCrypto';
import { CircularProgress, Grid, Typography } from "@mui/material";
// import { Grid } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MarketCryptoHeader from '../Header/MarketCryptoHeader';


export default function MarketCryptoList(props) {
  const [fav, setFav] = useState([]);  

  const handleSubmit = () => {
    
    if (fav.length > 0) {
      console.log("axios call to the back end to store fav gets called")
      axios.put(`/insert-watchlist`, {
        id: fav[0], 
        img: fav[1], 
        user: JSON.parse(localStorage.getItem('username'))})
        .then((res) => 
        console.log("This is the responds from /insert-watchlist post: ", res))
        .catch((error) => console.log("from insert-watchlist error: ", error))
    }
  }
  
  useEffect(() => {
    handleSubmit();
  }, [fav]);

  const marketCrypto = props.data.map((crypto)=>{
    return (
      <MarketCrypto
      key={crypto.id}
      id={crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      setFav={setFav}
      fav={fav}
      mode={props.mode} 
      setMode={props.setMode}
      />
    );
  });

  return (
      <div >
            <Grid container direction={"column"} style={{maxHeight: '52.5vh', overflow: 'hidden'}} mb={2.8} 
           >         
            <TableContainer component={Paper}  sx= {
              {backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)', borderTop: "1px solid grey", borderBottom: "1px solid grey"}
            }>
            <Table stickyHeader aria-label="sticky table" align="left">
              <MarketCryptoHeader/>
                    <TableBody>  
                        {marketCrypto}
                    </TableBody>
            </Table>
          </TableContainer>
       
        </Grid>
        {/* <Grid>
             <Typography style={{color: 'red'}} >test</Typography>
            </Grid> */}
      </div>
  );
}
