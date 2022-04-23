import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrendingCryptoList from "./TrendingCryptoList";
import MarketCryptoList from './MarketCryptoList';
import topFourTrending from "../../helpers/topFourTrending";
import SearchForm from "./SearchForm";
import searchFilter from "../../helpers/searchFilter";
import Header from '../Header/Header';
import SideBarList from "./SideBarList";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { sizing } from "@mui/system";
import MarketCryptoHeader from "../Header/MarketCryptoHeader";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Dashboard = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  const [state, setState] = useState([{
    trending:[],
    market:[],
   
  }]);
  const [render, setRender] = useState("");
  const [dashboard, setDashboard] = useState("market");
  const handlewatchlist = () => {
    if (dashboard === 'market') {
    setDashboard("watchlist");
    } else if (dashboard === 'watchlist') {
      setDashboard("market");
    }
  }
  const [search, setSearch] = useState("");
  const[loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get('/market')
      .then((res) => {
        setState((prev)=>[{ ...prev,
          market:res.data,
          trending:topFourTrending(res.data),
         
        }])
        },  setTimeout(()=>{
          setLoading(true)
        }, 500)
      )
      .catch((err)=>console.log(err));
  },[dashboard, render]);

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredRows = searchFilter(state[0].market, search)
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('rgb(171, 171, 171)');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  const containerRef = React.useRef(null);
  return (

    <ThemeProvider theme={darkTheme}>

      <Box sx={{ mt: -4 }} ref={containerRef}>
        <Grid container justifyContent={"center"}>
            {loading ? 
            (<div>        
              <SideBarList mode={props.mode} setMode={props.setMode}/>
              <Typography fontSize={25} >Dashboard</Typography> 
              <Typography align="center" fontSize={14} >Trending</Typography> 

              <TrendingCryptoList data={state[0].trending}/> 
              <Grid pt={4} >
                <SearchForm search={search} onChange={inputHandler} mode={props.mode} setMode={props.setMode}/>
              </Grid>
              <Grid >
              
                {(dashboard === "market") ?<Grid container display={'flex'} direction={"row"} gap={124}> <Typography fontSize={20} >Market</Typography><Button onClick={handlewatchlist}><FavoriteBorderIcon/></Button></Grid> : <Grid container display={'flex'} direction={"row"} gap={120}> <Typography fontSize={20} >Watch List</Typography><Button onClick={handlewatchlist}><CurrencyBitcoinIcon/></Button></Grid>}
                </Grid>
                <MarketCryptoList render={render} setRender={setRender} dashboard={dashboard} data={filteredRows} mode={props.mode} 
              setMode={props.setMode}/>
              
          
            </div>)
            : <CircularProgress/>} 
    
        </Grid>
      </Box>

    </ThemeProvider>
  )
}

export default Dashboard