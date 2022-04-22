import React, {useState, useEffect} from 'react'
import SideBarList from '../Dashboard/SideBarList'
import axios from 'axios';
import WatchlistItem from './WatchlistItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Grid, Typography } from "@mui/material";
import MarketCryptoHeader from '../Header/WatchListHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Watchlist = (props) => {

  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  const [state, setState] = useState([{
    market: [],
    watchlist: []
  }]);

  const [deleted, setDeleted] = useState("");
  const [render, setRender] = useState("");

  
  useEffect(() => {
    Promise.all([
      // axios.get('/market'),
      axios.put('/fav-list', {user: JSON.parse(localStorage.getItem('username'))} )
    ]).then((all)=> {
      console.log('This is what is returned from the api calls:', all);
      setState(prev => [{...prev,
        watchlist: all[0].data
      }])
    })

  },[render]);

  const handleSubmit = () => {
    setRender(deleted);
    if (deleted) {
    axios.put(`/user-delete`, {data: deleted , user: JSON.parse(localStorage.getItem('username'))})
    }
  }
  useEffect(() => {
    handleSubmit();
  }, [deleted]);

  console.log("(outside) the Page may crash but read me: ", state);

  const filtered = state[0].watchlist.map((marketCrypto)=> {
    console.log("the Page may crash but read me: ", state);
    return(
      <WatchlistItem
      key={marketCrypto.crypto_id}
      id={marketCrypto.crypto_id}
      image={marketCrypto.image}
      setDeleted={setDeleted}
      mode={props.mode}
      />
    );
  })
  
  return (


    <ThemeProvider theme={darkTheme}>
           <Grid container spacing={2} direction={"row"} justifyContent={"center"} mt={8}>
             <Grid>
      <SideBarList mode={props.mode} setMode={props.setMode}/>
      </Grid>
      <Grid>
        <TableContainer component={Paper} >
            <Table stickyHeader aria-label="sticky table" align="left">
              <MarketCryptoHeader/>
                    <TableBody>  
                    {filtered}
                    </TableBody>
            </Table>
      </TableContainer>
          
            </Grid>
   </Grid>
   </ThemeProvider>


  );
}

export default Watchlist;
