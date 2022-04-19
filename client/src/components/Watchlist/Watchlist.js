import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import SideBarList from '../Dashboard/SideBarList'
import axios from 'axios';
import WatchlistItem from './WatchlistItem';


const Watchlist = () => {
  const [state, setState] = useState([{
    market: [],
    watchlist: []
  }]);

  const [deleted, setDeleted] = useState("");
  const handleSubmit = () => {
    if (deleted) {
    axios.put(`/user-delete`, {data: deleted , user: JSON.parse(localStorage.getItem('username'))})
    }
    
  }
  useEffect(()=>{
    handleSubmit();
  }, [deleted]);
  
  useEffect(() => {
    Promise.all([
      axios.get('/market'),
      axios.put('/fav-list', {user: JSON.parse(localStorage.getItem('username'))} )
    ]).then((all)=> {
      console.log('This is what is returned from the api calls:', all)
      setState(prev => [{...prev,
        market: all[0].data,
        watchlist: all[1].data
      }])
    })

  },[deleted]);

const arr = [];

  const filter = state[0].watchlist.map((wishListCrypto) => {
    state[0].market.map(marketCrypto => {
      if (JSON.stringify(wishListCrypto.crypto_id) === JSON.stringify(marketCrypto.id)) {
        console.log("wishlist: ", wishListCrypto.crypto_id);
        arr.push(marketCrypto);
      }
    }

  );
  });
  console.log("(outside) the Page may crash but read me: ", state);

  const filtered = arr.map((marketCrypto)=> {
    console.log("the Page may crash but read me: ", state);
    return(
      <WatchlistItem
      key={marketCrypto.id}
      id={marketCrypto.id}
      image={marketCrypto.image}
      name={marketCrypto.name}
      price_change_percentage_24h={marketCrypto.price_change_percentage_24h}
      current_price={marketCrypto.current_price}
      last_updated={marketCrypto.last_updated}
      setDeleted={setDeleted}
      />
    );
  })

  
  return (
    <div>
    <Header/>
    <SideBarList/>
      {filtered}
    </div>
  );
}

export default Watchlist;