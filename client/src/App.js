import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';

import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/singleCrypto/SingleCrypto';

import Login from './components/login';
import ChatroomList from './components/Chat/ChatroomList';
import NewsList from './components/News/NewsList';

import ProtectedRoutes from './hooks/userAuth';
import CurrencyConverter from './components/CurrencyConverter';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';



function App() {
  const [mode, setMode] = useState("light")

  return (
    <div className={mode}>
      <Routes>
          
        <Route path="/" 
          element={
            <Login/>
          }
        /> 

        <Route path='/' 
          element={
            <ProtectedRoutes/>
          }
        >

        <Route path="/dashboard" 
          element={
            <Dashboard 
              mode={mode} 
              setMode={setMode}
            />
          }
        /> 

        <Route path="/watchlist" 
          element={
            <Watchlist 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        <Route path="/news" 
          element={
            <NewsList 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        <Route path="/crypto/:id" 
          element={
            <SingleCrypto 
              mode={mode} 
              setMode={setMode}
            />
          }
        />   

        <Route path="/chatrooms" 
          element={
            <ChatroomList 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        <Route path="/calculators" 
          element={
            <CurrencyConverter 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

<Route path="/trending" 
          element={
            <TrendingCryptoList 
              mode={mode} 
              setMode={setMode}
            />
          }
        />
        
        </Route>

      </Routes>

    </div>

  );
}

export default App;