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

  // const [search, setSearch] = useState("");
  // useEffect(() => {
  //   Promise.all
  //   axios.get('/market')
  //     .then((res) => {
  //       setMarket((prev)=>[])
  //       }
  //     )
  //     .catch((err)=>console.log(err));
  // },[]);

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
  },[]);
console.log("Watchlist: ", state[0].watchlist);
  
const watchlistItem = state[0].market.map (()=> {

})

  return (
    <div>
    <Header/>
    <SideBarList/>
      watchlist
    </div>
  )
}

export default Watchlist;
