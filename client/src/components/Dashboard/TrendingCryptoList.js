import { useState, useEffect } from 'react';
import axios from 'axios';

import TrendingCrypto from './TrendingCrypto';

export default function TrendingCryptoList() {
  const [state, setState] = useState([{}]);
  useEffect(()=>{
    axios.get('/TrendingCrypto')
      .then((res)=> setState(res.data))
      .catch((err)=> console.log(err));
  },[]);

  const Crypto = state.map((crypto)=>{
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
      {Crypto}
    </div>
  )
}