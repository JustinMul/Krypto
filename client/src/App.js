import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/singleCrypto/SingleCrypto';

import Login from './components/login';
import ChatroomList from './components/Chat/ChatroomList';
import NewsList from './components/News/NewsList';

import ProtectedRoutes from './hooks/userAuth';
import CurrencyConverter from './components/CurrencyConverter';
function App() {

  return (
    

      <Routes>
          
          <Route path="/" element={<Login/>}/> 

          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>}/> 
          
          
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/news" element={<NewsList/>}/>
          
            <Route path="/crypto/:id" element={<SingleCrypto/>}/>
          
          
            <Route path="/chatrooms" element={<ChatroomList/>}/>

            <Route path="/calculators" element={<CurrencyConverter/>}/>
          </Route>
      
      </Routes>
      
    

  );
}

export default App;