import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from './Chart';
import Details from './Details';
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const SingleCrypto = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  const[loading, setLoading] = useState(false)
  const { id } = useParams();
  const [state, setState] = useState([{
    img: "",
    data: {},
    description: "",
    supply: "",
    circulating_Supply: "",
    priceChange: ""
  }]);

  useEffect(() => {
    axios.get(`/crypto/${id}`) 
    .then((res) => {
      setState((prev)=>[{ ...prev,
        img:res.data.image.large,
        data: res.data,
        description: res.data.description.en,
        price: res.data.market_data.current_price.cad,
        circulatingSupply: res.data.market_data.circulating_supply,
        priceChange: res.data.market_data.price_change_24h
      }])
      }, setTimeout(()=>{
        setLoading(true)
      }, 500)
    )
    .catch((err)=>console.log(err));
},[id]);

  console.log(state[0])
  return (

<div>
      {(loading) ? 
   <Grid container direction={'column'}  alignItems="center" justifyContent="center">

      <SideBarList mode={props.mode} setMode={props.setMode}/>

      <Grid item mb={0} align="center">
        <img src = {state[0].img} width={100}></img>
        <div>{state[0].data.name}</div>
      </Grid>

      <Grid item mt={5}  width={800}>
        <Chart id={props.id} />
      </Grid>

      <Grid item>
        <Details details={state[0]} id ={id}/>
      </Grid>
     
    </Grid>:
       <Grid container direction={'column'}  alignItems="center" justifyContent="center">

       <SideBarList mode={props.mode} setMode={props.setMode}/>
 
       <Grid item mb={0} align="center">
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton width="60%" />
       </Grid>
 
       <Grid item mt={5} mb={5}  width={800} align="center">
       <Skeleton variant="rectangular" animation="wave" width={750} height={400} />
       </Grid>
 

       <Skeleton variant="rectangular" animation="wave" width={700} height={150} />

      
     </Grid>
}

</div>
  )

}

export default SingleCrypto

// setState((prev)=>[{ ...prev,
//   market:res.data,
//   trending:topFourTrending(res.data),
//   isLoading: false
// }])