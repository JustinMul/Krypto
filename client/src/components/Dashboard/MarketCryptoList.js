import { useState, useEffect } from 'react';
import axios from 'axios';
import MarketCrypto from './MarketCrypto';


export default function MarketCryptoList(props) {
  const [fav, setFav] = useState([]);  

  const handleSubmit = () => {
    
    if (fav.length > 0) {
      console.log("axios call to the back end to store fav gets called")
      axios.put(`/insert-watchlist`, {
        id: fav[0], 
        img: fav[1], 
        user: JSON.parse(localStorage.getItem('username'))})
        .then((res) => 
        console.log("This is the responds from /insert-watchlist post: ", res))
        .catch((error) => console.log("from insert-watchlist error: ", error))
    }
  }
  
  useEffect(() => {
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
      />
    );
  });

  return (
    <div>
      {marketCrypto}
    </div>
  );
}
