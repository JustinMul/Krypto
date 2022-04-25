import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import SingleCrypto from './components/singleCrypto/SingleCrypto';
import Login from './components/login';
import NewsList from './components/News/NewsList';
import {Chat} from './components/Chat/Chat'
import ProtectedRoutes from './hooks/userAuth';
import CurrencyConverter from './components/CurrencyConverter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, common } from '@mui/material/colors';
import DeveloperList from './components/Developer/DeveloperList'

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {  main: "#1976d2" },
          background: {
            default: "#D6E8FA",
            paper: "#f8f8ff",
          },
          divider: common.black,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {main: "#5E5F6E"},
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
            <DeveloperList 
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