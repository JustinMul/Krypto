import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import Watchlist from './components/Watchlist/Watchlist';
import SingleCrypto from './components/singleCrypto/SingleCrypto';

import Login from './components/login';
import ChatroomList from './components/Chat/ChatroomList';

import ProtectedRoutes from './hooks/userAuth';

function App() {

  return (
    

      <Routes>
          
          <Route path="/" element={<Login/>}/> 

          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>}/> 
          
          
            <Route path="/watchlist" element={<Watchlist/>}/>
          
          
            <Route path="/crypto/:id" element={<SingleCrypto/>}/>
          
          
            <Route path="/chatrooms" element={<ChatroomList/>}/>
          </Route>
      
      </Routes>
      
    

  );
}

export default App;