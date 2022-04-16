import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';




const Charts = (props) => {
  
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  // const [flag,setflag] = useState(false);

  const id = props.id;
  console.log('this is props', props)
  
  useEffect(() => {
    axios.get(`/chart/${id}`) 
      .then((res) => { 
        setHistoricData(res.data.prices)
        // console.log('this is the response', res);
        }
      )
      .catch((err)=>console.log(err));
  },[id]);
  

  console.log("historicDatahistoricData: ", historicData)
  
  return (
    <div>
      <Line
    data={{
      labels: historicData.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),

    datasets: [
      {
        data: historicData.map((coin) => coin[1]),
        label: `Price ( Past ${days} Days ) in cad`,
        borderColor: "#EEBC1D",
      },
    ],
  }}
  options={{
    elements: {
      point: {
        radius: 1,
      },
    },
  }}
/>
    </div>
  )
}

export default Charts
