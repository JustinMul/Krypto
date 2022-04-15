import { Routes, Route } from 'react-router-dom';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {



  return (
    <>
      <Routes>
        <Route path="/dashboard/" element={<TrendingCryptoList/>}/>
      </Routes>
    </>
  );
}

export default App;