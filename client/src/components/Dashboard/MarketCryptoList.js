import { useState, useEffect } from 'react';
import axios from 'axios';
import MarketCrypto from './MarketCrypto';


export default function MarketCryptoList(props) {
  const [fav, setFav] = useState("");  
console.log('this is the value of fav: ', fav)

  const handleSubmit = () => {

    if (fav) {
    axios.put(`/user-fav`, {data: fav , user: JSON.parse(localStorage.getItem('username'))});
    // .then((response) => {
    // });
    }
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
      />
    );
  });

  return (
    <div>
      {marketCrypto}
    </div>
  );
}
