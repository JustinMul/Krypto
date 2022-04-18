import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import SideBarList from './components/Dashboard/SideBarList';
import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/singleCrypto/SingleCrypto';
import Header from './components/Header/Header'
import Login from './components/login';
import ChatroomList from './components/Chat/ChatroomList';


function App() {



  return (
    <div>
      <Header/>
      <SideBarList/>
      <Login/>
      <Routes>
        
        <Route exact path="/dashboard/" element={<Dashboard/>}/>
        <Route exact path="/crypto/" element={<TrendingCryptoList/>}/>
        <Route exact path="/watchlist/" element={<Watchlist/>}/>
        <Route exact path="/news/" element={<TrendingCryptoList/>}/>
        <Route exact path="/chatRooms/" element={<ChatroomList/>}/>
        
        <Route exact path="/chatRooms/trending" element={<Dashboard/>}/>
        <Route exact path="/chatRooms/investments" element={<Dashboard/>}/>
        <Route exact path="/chatRooms/general" element={<Dashboard/>}/>
        <Route exact path="/chatRooms/events" element={<Dashboard/>}/>


        <Route exact path="/messages/" element={<TrendingCryptoList/>}/>
        <Route path="/crypto/:id" element={<SingleCrypto/>}/>

      </Routes>
    </div>
  );
}

export default App;