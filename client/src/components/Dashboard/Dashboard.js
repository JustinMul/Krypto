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
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('rgb(171, 171, 171)');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  return (

    <ThemeProvider theme={darkTheme}>
    

      <Header mode={props.mode} setMode={props.setMode}/>
      <Box sx={{ml:2, mt:4, mr:2, mb:4}}>
        <Grid container spacing={2}>
          <Grid>
            <SideBarList mode={props.mode} setMode={props.setMode}/>
          </Grid>

          <Grid>
          <Typography variant="h3">Dashboard</Typography> 
            
            {loading ? 
            (<div>
              <Grid >
               <Typography align="center" variant="h4">Trending</Typography> 
                <TrendingCryptoList data={state[0].trending}/> 
              </Grid>
              <SearchForm search={search} onChange={inputHandler}/>
                     
              <Grid>
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