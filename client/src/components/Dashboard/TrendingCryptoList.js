import {React,useState,useEffect} from 'react';

import axios from 'axios';

import TrendingCrypto from './TrendingCrypto';

const TrendingCryptoList = () => {
  const [state, setState] = useState([{}]);
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=1&sparkline=false%27')
      .then((res)=> setState(res.data))
      .catch((err)=>console.log(err));
  },[]);
  const TrendingCryptoList = state.map((crypto)=>{
    return (
      <TrendingCrypto
      key = {crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      />
    );
  });
  return (
    <div>
      {TrendingCryptoList}
    </div>
  )
}

export default TrendingCryptoList