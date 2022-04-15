import { useState, useEffect } from "react";
import axios from 'axios';
import TrendingCryptoList from "./TrendingCryptoList";
import MarketCryptoList from './MarketCryptoList';
import sortByPercentageChange from "../../helpers/sorting";

import SearchBar from "./SearchBar";

import search from "../../helpers/searching";

export default function Dashboard() {
  
  const [state, setState] = useState({
    market: [],
    trending: []
  });

    useEffect(() => {
      Promise.all([
      axios.get('/Market'),
      axios.get('/Market')
    ]).then((all) => 
    setState((prev) => ({
      ...prev,
      market: all[0].data,
      trending: sortByPercentageChange(all[1].data)
    })));
  }, []);

  return (
    <div>
      <SearchBar onSubmit={setState}/>

      <TrendingCryptoList data={state}/>
      <MarketCryptoList data={state}/>
    </div>

  );
}