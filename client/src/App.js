import { Routes, Route } from 'react-router-dom';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';


function App() {

  return (
    <div>
      <Routes>

        <Route exact path="/dashboard/" element={<TrendingCryptoList/>}/>
        <Route exact path="/crypto/" element={<TrendingCryptoList/>}/>
        <Route exact path="/watchlist/" element={<TrendingCryptoList/>}/>
        <Route exact path="/news/" element={<TrendingCryptoList/>}/>
        <Route exact path="/chatRooms/" element={<TrendingCryptoList/>}/>
        <Route exact path="/messages/" element={<TrendingCryptoList/>}/>

      </Routes>
    </div>
  );
}

export default App;