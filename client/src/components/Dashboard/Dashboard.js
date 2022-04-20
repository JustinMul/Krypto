import { useState, useEffect } from "react";
import axios from 'axios';
import TrendingCryptoList from "./TrendingCryptoList";
import MarketCryptoList from './MarketCryptoList';
import topFourTrending from "../../helpers/topFourTrending";
import SearchForm from "./SearchForm";
import searchFilter from "../../helpers/searchFilter";
import Header from '../Header/Header';
import SideBarList from "./SideBarList";
import { CircularProgress } from "@mui/material";

const Dashboard = (props) => {
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
    <>
      <Header/>
      <SideBarList/>
      {loading ? 
        (<div><TrendingCryptoList data={state[0].trending}/>
       <SearchForm search={search} onChange={inputHandler}/>
       <MarketCryptoList data={filteredRows}/></div> )
       : <CircularProgress/>}
      

    </>
  )
}

export default Dashboard