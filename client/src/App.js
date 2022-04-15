import './App.css';
import Test from "./components/test";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState([{}]);
  useEffect(()=>{
    axios.get('http://localhost:8081/users')
      .then((res)=> setState(res.data))
      .catch((err)=>console.log(err));
  },[]);
  console.log("STATEEEEEEEEEE",state);
  const TrendingCryptoList = state.map((crypto)=>{
    return (
      <Test
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
    <div className="App">
      {TrendingCryptoList}
    </div>
  );
}

export default App;