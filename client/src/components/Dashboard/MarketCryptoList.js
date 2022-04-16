import { useState, useEffect } from 'react';
import axios from 'axios';

import MarketCrypto from './MarketCrypto';

export default function MarketCryptoList(props) {


  const marketCrypto = props.data.map((crypto) => {
    return (
      <MarketCrypto
      key = {crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      />
    );
  });

  return (
    <div>
      {marketCrypto}
    </div>
  )
}


  // const promise = new Promise((resolve,reject)=>{
  //   resolve(props);
  // })
  // promise.then((res) => console.log("PROMIS: ",res));
  

  //   for (let x = 0; x < 10 + offset; x++) {


  //     // console.log('testsetest ', props)
  //     return  (
  
  //     <MarketCrypto
  //     key={props.data[x].id}
  //     image={props.data[x].image}
  //     name={props.data[x].name}
  //     price_change_percentage_24h={props.data[x].price_change_percentage_24h}
  //     current_price={props.data[x].current_price}
  //     last_updated={props.data[x].last_updated}
  //     />
  //     )
  //     }
  //     offset += 10;
 
  // // function marketCrypto() {
  // //   console.log('this is market data', props.data)

  // //   for (let x = 0; x < 10 + offset; x++) {


  // //   return  (

  // //     console.log('testsetest ', props)
  // //   // <MarketCrypto
  // //   // key = {props.data[x].id}
  // //   // image={props.data[x].image}
  // //   // name={props.data[x].name}
  // //   // price_change_percentage_24h={props.data[x].price_change_percentage_24h}
  // //   // current_price={props.data[x].current_price}
  // //   // last_updated={props.data[x].last_updated}
  // //   // />
    
  // //   )
  // //   }
  // //   offset += 10;
  // // }

  // const handleScroll = (e) => {
  //   console.log(e.target.documentElement.scrollTop)
  //   console.log(e.target.documentElement.scrollHeight)
  //   // if (window.innerHeight + e.target.documentElement.scrollTop +1 >= e.target.documentElement.scrollHeight) {

  //   //  marketCrypto()
  //   // }
  // }

  // useEffect(()=> {
  //   marketCrypto();
  //   window.addEventListener("scroll", handleScroll)
  // },[])