import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from './Chart';
import Details from './Details';
import SideBarList from '../Dashboard/SideBarList';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import '../Dashboard/TrendingCrypto.scss'

const SingleCrypto = (props) => {
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
      setTimeout(()=>{
        setLoading(true)
      }, 500)
    })
    .catch((err)=>console.log(err));
  },[id]);

  let name = state[0].data.name

  return (
    <div>
      {
        (loading) ? 
        <Grid container direction={'column'}  alignItems="center" justifyContent="center" mb={5}>
          <SideBarList mode={props.mode} setMode={props.setMode}/>
          <Grid item  mt={-1} align="center" >
            <img className = 'singleCryptoImg' src = {state[0].img} width={100} alt = "crypto" ></img>
            <div>{name.toUpperCase()}</div>
          </Grid>
          <Grid item mt={5}  width={850}>
            <Chart id={props.id} mode={props.mode}/>
          </Grid>
          <Grid item>
            <Details details={state[0]} id ={id} mode={props.mode}/>
          </Grid>
        </Grid>
        :
        <Grid container direction={'column'}  alignItems="center" justifyContent="center">
          <SideBarList mode={props.mode} setMode={props.setMode}/>
          <Grid item mb={0} align="center">
            <Skeleton variant="circular" width={90} height={90} />
            <Skeleton width="60%"/>
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