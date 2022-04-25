import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';


import SingleCrypto from './components/singleCrypto/SingleCrypto';

import Login from './components/login';
import SearchForm from './components/Dashboard/SearchForm';

import NewsList from './components/News/NewsList';
import {Chat} from './components/Chat/Chat'

import ProtectedRoutes from './hooks/userAuth';
import CurrencyConverter from './components/CurrencyConverter';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';
import TrendingCrypto from './components/Dashboard/TrendingCrypto';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, grey, deepOrange, common, blue} from '@mui/material/colors';
import { AdminList } from './components/Admin/AdminList';



function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {  main: "#295A24" },
          background: {
            default: "#EEECEE",
            paper: "#EEECEE",
          },
          divider: common.black,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {main: "rgb(15, 30, 12)"},//sx={(props.mode ==='light')?{fontSize:40, color:'#295A24'}: {fontSize:40, color:'rgb(1, 19, 11)'}}
          divider: common.white,
          background: {
            default: "#282928",
            paper: "rgb(35, 35, 35)",
          },
          text: {
            primary: '#fff',
            secondary: grey[100],
          },
        }),
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
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
        
        <Route path="/developers" 
          element={
            <AdminList 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        </Route>

      </Routes>

    </div>
</ThemeProvider>
  );
}

export default App;