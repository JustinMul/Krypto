import { useState, useEffect } from 'react';
import axios from 'axios';

import MarketCrypto from './MarketCrypto';

export default function MarketCryptoList(props) {
  console.log("props:",props.data);

  const marketCrypto = props.data.map((crypto)=>{
    return (
      <MarketCrypto
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
      {marketCrypto}
    </div>
  )
}
