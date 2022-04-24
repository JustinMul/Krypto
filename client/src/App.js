import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';


import SingleCrypto from './components/singleCrypto/SingleCrypto';

import Login from './components/login';

import NewsList from './components/News/NewsList';
import { Chat } from './components/chatt/Chat';

import ProtectedRoutes from './hooks/userAuth';
import CurrencyConverter from './components/CurrencyConverter';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import TrendingCrypto from './components/Dashboard/TrendingCrypto';



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
            <Chat 
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
        
        </Route>

      </Routes>

    </div>

  );
}

export default App;