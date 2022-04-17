import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

const Charts = (props) => {
  
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [day, setDay] = useState(7)
  // const []
  // const [flag,setflag] = useState(false);

  const id = props.id;
 
  const daySet = function (day){
    setDay(day)
  }

  console.log('this is props', props)
  
  useEffect(() => {
    axios.get(`/chart/${id}/${day}`) 
      .then((res) => { 
        setHistoricData(res.data.prices)
        // console.log('this is the response', res);
        }
      )
      .catch((err)=>console.log(err));
  },[id, day]);
  

  console.log("historicDatahistoricData: ", historicData)
  
  return (
    <div>
      <Line
    data={{
      labels: historicData.map((coin) => {
       
      let date = new Date(coin[0]);
      console.log(date.getMonth())
      let time =
        date.toLocaleDateString()
          // ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          // : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),

    datasets: [
      {
        data: historicData.map((coin) => coin[1]),
        label: `${props.id.toUpperCase()} ( Past ${day} Days ) in CAD`,
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
<button onClick={() => daySet(1)}>One Day</button>
<button onClick={() => daySet(7)}>One Week</button>
<button onClick={() => daySet(30)}>One Month</button>
<button onClick={() => daySet(365)}>One Year</button>


  </div>
  )
}

export default Charts
