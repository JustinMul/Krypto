import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import SideBarList from './components/Dashboard/SideBarList';
import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/singleCrypto/SingleCrypto';
import Header from './components/Header/Header';
import Login from './components/Login';
import ChatroomList from './components/Chat/ChatroomList';
import LoginTest from './components/LoginTest';
import axios from 'axios';
import { useState } from 'react';

function App() {

  //login
  const [state, setState] = useState({
    user: "",
    password: ""
  });
  const [user, setUser] = useState(null);
  
  const handleChangeUser = (event) => {
    
    setState({...state, user: event});
   
  }
  const handleChangePassword = (event) => {
  
    setState({...state, password: event});
   
  }

  const handleSubmit = (event) => {

    axios.put(`/user-data`, {data: state}).then((response) => {
      console.log('this is the response', response.data.name);
      if (response.data.name) {
        setUser(response.data.name);
      }
    });
 
    event.preventDefault();
  }

 
  console.log("User: ",user);
  return (
    <div>
      {user ? 
      <div>
      <Header/>
      <SideBarList user = {user}/>
      <button onClick={() => setUser("")}>Logout</button>
      <Routes>
        
        <Route exact path="/dashboard/" element={<Dashboard user={user} />}/>
        <Route exact path="/crypto/" element={<TrendingCryptoList/>}/>
        <Route exact path="/watchlist/" element={<Watchlist/>}/>
        <Route exact path="/news/" element={<TrendingCryptoList/>}/>
        <Route exact path="/chatRooms/" element={<ChatroomList/>}/>        
        
        <Route exact path="/chatRooms/investments" element={<Dashboard/>}/>
        <Route exact path="/chatRooms/general" element={<Dashboard/>}/>
        <Route exact path="/chatRooms/events" element={<Dashboard/>}/>

        <Route exact path="/messages/" element={<TrendingCryptoList/>}/>
        <Route path="/crypto/:id" element={<SingleCrypto/>}/>

      </Routes>
      </div>
      :       
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state.user.value} name="name" onChange={(event)=> handleChangeUser(event.target.value)} />
       Password:
       <input type="text" value={state.password.value} name="name" onChange={(event)=> handleChangePassword(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    } 
      

    </div>
  );
}

export default App;