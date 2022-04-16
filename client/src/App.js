import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import SideBarList from './components/Dashboard/SideBarList';
import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/Dashboard/SingleCrypto';

function App() {

  return (
    <div>
    <SideBarList/>
      <Routes>
        
        <Route exact path="/dashboard/" element={<Dashboard/>}/>
        <Route exact path="/crypto/" element={<TrendingCryptoList/>}/>
        <Route exact path="/watchlist/" element={<Watchlist/>}/>
        <Route exact path="/news/" element={<TrendingCryptoList/>}/>
        <Route exact path="/chatRooms/" element={<TrendingCryptoList/>}/>
        <Route exact path="/messages/" element={<TrendingCryptoList/>}/>
        <Route path="/crypto/:id" element={<SingleCrypto/>}/>

      </Routes>
      </div>
  );
}

export default App;