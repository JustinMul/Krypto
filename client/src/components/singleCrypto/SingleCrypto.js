import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from './Chart';
import Details from './Details';
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList';

const SingleCrypto = (props) => {
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
      }
    )
    .catch((err)=>console.log(err));
},[id]);

  
  return (
    <div>
      <Header mode={props.mode} setMode={props.setMode}/>
      <SideBarList mode={props.mode} setMode={props.setMode}/>
      <Chart id={id}/>
      <Details details={state[0]}/>

    </div>
  )
}

export default SingleCrypto

// setState((prev)=>[{ ...prev,
//   market:res.data,
//   trending:topFourTrending(res.data),
//   isLoading: false
// }])