import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import SideBarList from '../Dashboard/SideBarList'
import axios from 'axios';
import WatchlistItem from './WatchlistItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Watchlist = (props) => {

  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  const [state, setState] = useState([{
    market: [],
    watchlist: []
  }]);

  const [deleted, setDeleted] = useState("");
  const [render, setRender] = useState("");

  
  useEffect(() => {
    Promise.all([
      // axios.get('/market'),
      axios.put('/watchlist', {user: JSON.parse(localStorage.getItem('username'))} )
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
      mode={props.mode}
      />
    );
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      <Header mode={props.mode} setMode={props.setMode}/>
      <SideBarList mode={props.mode} setMode={props.setMode}/>
      <div className="testing">
        {filtered}
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Watchlist;
