import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  width: 150,
  border: "1px solid",
  lineHeight: 1.5,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Charts = (props) => {
  const { id } = useParams();

  const [chartData, setChartData] = useState([]);

  const [day, setDay] = useState(30);

  useEffect(() => {
    axios
      .get(`/chart/${id}/${day}`)
      .then((res) => {
        setChartData(res.data.prices);
      })
      .catch((err) => console.log(err));
  }, [id, day]);

  const dayHandler = (day) => {
    setDay(day);
  };

  const data = {
    labels: chartData.map((crypto) => {
      let date = new Date(crypto[0]);
      let time = date.toLocaleDateString();
      return day === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: chartData.map((crypto) => crypto[1]),
        label: `${id.toUpperCase()} ( Past ${day} Days ) in CAD`,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  let delayed;
  const options = {
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 27,
        },
      },
    },
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 5 + context.datasetIndex * 10;
        }
        return delay;
      },
    },
  };

  return (
    <Box width="100%">
      <Grid container spacing={0} direction="column" justifyContent={"center"}>
        <Paper elevation={3}>
          <Line data={data} options={options} />
        </Paper>

        <Grid container spacing={0}>
          <Grid
            mt={4}
            mb={5}
            item
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={() => dayHandler(1)}
            >
              One Day
            </BootstrapButton>
          </Grid>

          <Grid
            mt={4}
            mb={5}
            item
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={() => dayHandler(7)}
            >
              One Week
            </BootstrapButton>
          </Grid>

          <Grid
            mt={4}
            mb={5}
            item
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={() => dayHandler(30)}
            >
              One Month
            </BootstrapButton>
          </Grid>

          <Grid
            mt={4}
            mb={5}
            item
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={() => dayHandler(365)}
            >
              One Year
            </BootstrapButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;