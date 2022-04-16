import { useState, useEffect } from "react";
import axios from 'axios';

import TrendingCryptoList from "./TrendingCryptoList";
import MarketCryptoList from './MarketCryptoList';
import topFourTrending from "../../helpers/topFourTrending";
import SearchForm from "./SearchForm";
import searchFilter from "../../helpers/searchFilter";


const Dashboard = () => {
  const [state, setState] = useState([{
    trending:[],
    market:[],
    isLoading: true
  }]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get('/market') 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          trending:topFourTrending(res.data),
          market:res.data,
          isLoading: false
        }])
        }
      )
      .catch((err)=>console.log(err));
  },[]);

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredRows = searchFilter(state[0].market, search)
  return (
    <>
      <TrendingCryptoList data={state[0].trending}/>
      <SearchForm search={search} onChange={inputHandler}/>
      <MarketCryptoList data={filteredRows} isLoading={state[0].isLoading}/>
    </>
  )
}

export default Dashboard