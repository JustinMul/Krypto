import React from "react";
import { Grid, Paper } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CachedIcon from "@mui/icons-material/Cached";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

import EqualizerIcon from "@mui/icons-material/Equalizer";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./singleCrypto.scss";

const Details = (props) => {
  console.log(props.details);
  return (
    <div>
      <Grid container>
        <Grid
          container
          direction={"row"}
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <Paper
            sx={{
              p: 1,
              m: 3,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <DateRangeIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item>Genesis Date </Grid>
              <Grid item>
                {props.details.data.genesis_date
                  ? props.details.data.genesis_date
                  : "N/A"}{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <ShowChartIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item> Market Cap</Grid>
              <Grid item>
                {" "}
                ${" "}
                {props.details.data.market_data.market_cap.cad
                  ? props.details.data.market_data.market_cap.cad
                  : "N/A"}{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,

              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <EqualizerIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item> Market Cap Rank </Grid>
              <Grid item>
                {" "}
                {props.details.data.market_cap_rank
                  ? props.details.data.market_cap_rank
                  : "N/A"}
              </Grid>
            </Grid>
          </Paper>

          <Paper
            sx={{
              p: 1,
              m: 3,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <CachedIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item>Circulating Supply</Grid>
              <Grid item>
                {" "}
                {props.details.circulatingSupply
                  ? Math.round(props.details.circulatingSupply)
                  : "N/A"}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          container
          direction={"row"}
          alignItems="center"
          justifyContent="center"
        >
          <Paper
            sx={{
              p: 1,
              m: 3,
              mt: -1,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <AttachMoneyIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item> Current Price </Grid>
              <Grid item>
                {" "}
                $ {props.details.price ? props.details.price : "N/A"}
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,
              mt: -1,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <PriceChangeIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item>Price Change (24h) </Grid>
              <Grid item>
                ${" "}
                {props.details.priceChange ? props.details.priceChange : "N/A"}
              </Grid>
            </Grid>
          </Paper>

          <Paper
            sx={{
              p: 1,
              m: 3,
              mt: -1,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <SentimentSatisfiedAltIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item> Analyst up sentiment: </Grid>
              <Grid item>
                {" "}
                {props.details.data.sentiment_votes_up_percentage
                  ? props.details.data.sentiment_votes_up_percentage
                  : "N/A"}
                %{" "}
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,
              mt: -1,
              width: 200,
            }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <div className="iconContainer">
                <div className="icon">
                  <SentimentVeryDissatisfiedIcon
                    sx={
                      props.mode === "light"
                        ? { fontSize: 40 }
                        : { fontSize: 40, color: "white" }
                    }
                  />
                </div>
              </div>
              <Grid item> Analyst down sentiment:</Grid>
              <Grid item>
                {" "}
                {props.details.data.sentiment_votes_down_percentage
                  ? props.details.data.sentiment_votes_down_percentage
                  : "N/A"}
                %{" "}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
