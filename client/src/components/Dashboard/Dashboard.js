import { useState, useEffect } from "react";
import axios from 'axios';
import TrendingCryptoList from "./TrendingCryptoList";
import MarketCryptoList from './MarketCryptoList';
import sortByPercentageChange from "../../helpers/sorting";


export default function Dashboard() {
  
  const [state, setState] = useState({
    market: [],
    trending: []
    
  });

  const [search,setSearch] = useState('')
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [hasMore, setHasMore] = useState(false);

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

  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredCoins = state.market.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );
    
  console.log('this is filtered coins', filteredCoins)
  return (


    <div>
   <div className="coin-app">
      <div className="coin-search">
        {/* <h1 className="coin-text">Search your desired coin</h1> */}
        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>
        </form>
      <TrendingCryptoList data={state}/>
          </div>
              <MarketCryptoList data={filteredCoins}/>
        </div>
    </div>

  );
}

