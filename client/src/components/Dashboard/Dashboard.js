import { useState, useEffect } from "react";
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
  },[]);

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredRows = searchFilter(state[0].market, search)

  return (

    <ThemeProvider theme={darkTheme}>
    

      <Header mode={props.mode} setMode={props.setMode}/>

      <Box sx={{ml:2, mt:4, mr:2, mb:4}}>
        <Grid container spacing={2} >
          <Grid >
            <SideBarList mode={props.mode} setMode={props.setMode}/>
          </Grid>

          <Grid>
            {loading ? 
            (<div>
              <Grid >
                Trending
                <TrendingCryptoList data={state[0].trending}/> 
              </Grid>
              <SearchForm search={search} onChange={inputHandler}/>
                     <MarketCryptoHeader/>
              <Grid style={{maxHeight: '75vh', overflow: 'auto'}}>
                <MarketCryptoList data={filteredRows}/>
              </Grid>
            </div>)
            : <CircularProgress/>} 
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard