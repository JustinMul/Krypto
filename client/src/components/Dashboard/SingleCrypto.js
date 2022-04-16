import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCrypto = (props) => {
  const { id } = useParams();
  // (id.replace('%20', '-'))
  useEffect(() => {
    axios.get(`/crypto/${id}`) 
      .then((res) => {
        console.log(res);
        }
      )
      .catch((err)=>console.log(err));
  },[id]);
  return (
    <div>
      hi
    </div>
  )
}

export default SingleCrypto