import { useState, useEffect } from 'react';
import axios from 'axios';
import MarketCrypto from './MarketCrypto';

export default function MarketCryptoList(props) {
  const [fav, setFav] = useState("")
  

  const handleSubmit = () => {

    axios.put(`/user-fav`, {data: fav , user: props.user}).then((response) => {
     
    });
  }

  useEffect(()=>{
    handleSubmit();
  }, [fav]);

  const marketCrypto = props.data.map((crypto)=>{
    return (
      <MarketCrypto
      key={crypto.id}
      id={crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      setFav={setFav}
      fav={fav}
      user = {props.user}
      />
    );
  });

  return (
    <div>
      {marketCrypto}
    </div>
  );
}
