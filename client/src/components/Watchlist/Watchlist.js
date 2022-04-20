import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import SideBarList from '../Dashboard/SideBarList'
import axios from 'axios';
import WatchlistItem from './WatchlistItem';


const Watchlist = (props) => {
  const [state, setState] = useState([{
    market: [],
    watchlist: []
  }]);

  const [deleted, setDeleted] = useState("");
  const [render, setRender] = useState("");

  
  useEffect(() => {
    Promise.all([
      // axios.get('/market'),
      axios.put('/fav-list', {user: JSON.parse(localStorage.getItem('username'))} )
    ]).then((all)=> {
      console.log('This is what is returned from the api calls:', all);
      setState(prev => [{...prev,
        watchlist: all[0].data
      }])
    })

  },[render]);

  const handleSubmit = () => {
    setRender(deleted);
    if (deleted) {
    axios.put(`/user-delete`, {data: deleted , user: JSON.parse(localStorage.getItem('username'))})
    }
  }
  useEffect(() => {
    handleSubmit();
  }, [deleted]);

  console.log("(outside) the Page may crash but read me: ", state);

  const filtered = state[0].watchlist.map((marketCrypto)=> {
    console.log("the Page may crash but read me: ", state);
    return(
      <WatchlistItem
      key={marketCrypto.crypto_id}
      id={marketCrypto.crypto_id}
      image={marketCrypto.image}
      setDeleted={setDeleted}
      />
    );
  })
//  const [test, setTest] = setState(false);
//   const handlefav = () => {
//     if (!test){
//       setTest(true);
//     }
//     setTest(false);
//   }
  
  return (
    <div>
    <Header mode={props.mode} setMode={props.setMode}/>
    <SideBarList/>
      {filtered}
    {/* <button onClick={() => handlefav()}>fav list</button> */}
      {/* {(test) ? filtered : <div>lost connection</div>} */}
    </div>
  );
}

export default Watchlist;
