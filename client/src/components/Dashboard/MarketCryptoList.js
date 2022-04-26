import { useState, useEffect } from "react";
import axios from "axios";
import MarketCrypto from "./MarketCrypto";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import MarketCryptoHeader from "../Header/MarketCryptoHeader";

export default function MarketCryptoList(props) {
  const arr = [];
  const [num, setNum] = useState(0);
  const [deleted, setDeleted] = useState("");
  const [fav, setFav] = useState([]);
  const [state, setState] = useState([
    {
      watchlist: [],
    },
  ]);

  const handleSubmitWatchlist = () => {
    props.setRender(deleted);
    if (deleted) {
      axios.put(`/user-delete`, {
        data: deleted,
        user: JSON.parse(localStorage.getItem("username")),
      });
    }
  };

  useEffect(() => {
    handleSubmitWatchlist();
  }, [deleted]);

  useEffect(() => {
    Promise.all([
      axios.put("/watchlist", {
        user: JSON.parse(localStorage.getItem("username")),
      }),
    ]).then((all) => {
      setState((prev) => [{ ...prev, watchlist: all[0].data }]);
    });
  }, [props.render, props.dashboard]);

  const handleSubmit = () => {
    if (fav.length > 0) {
      console.log("axios call to the back end to store fav gets called");
      axios
        .put(`/insert-watchlist`, {
          id: fav[0],
          img: fav[1],
          user: JSON.parse(localStorage.getItem("username")),
        })
        .then((res) =>
          console.log("This is the responds from /insert-watchlist post: ", res)
        )
        .catch((error) => console.log("from insert-watchlist error: ", error));
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [fav]);

  state[0].watchlist.map((marketCrypto) => {
    props.data.map((crypto) => {
      if (marketCrypto.crypto_id === crypto.id) {
        arr.push(crypto);
      }
    });
  });

  const watchlistCrypto = arr.map((crypto) => {
    return (
      <MarketCrypto
        key={crypto.id}
        id={crypto.id}
        image={crypto.image}
        name={crypto.name}
        price_change_percentage_24h={crypto.price_change_percentage_24h}
        current_price={crypto.current_price}
        last_updated={crypto.last_updated}
        setFav={setFav}
        fav={fav}
        mode={props.mode}
        setMode={props.setMode}
        dashboard={props.dashboard}
        setDeleted={setDeleted}
      />
    );
  });

  const marketCrypto = props.data.map((crypto) => {
    return (
      <MarketCrypto
        key={crypto.id}
        id={crypto.id}
        image={crypto.image}
        name={crypto.name}
        price_change_percentage_24h={crypto.price_change_percentage_24h}
        current_price={crypto.current_price}
        last_updated={crypto.last_updated}
        setFav={setFav}
        fav={fav}
        mode={props.mode}
        setMode={props.setMode}
        dashboard={props.dashboard}
        setDeleted={setDeleted}
        setNum={setNum}
        num={num}
      />
    );
  });

  return (
    <Grid
      container
      direction={"column"}
      style={{ maxHeight: "52.5vh", overflow: "hidden" }}
      mb={2.8}
    >
      <TableContainer
        component={Paper}
        sx={{
          mb: 4,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <MarketCryptoHeader dashboard={props.dashboard} mode={props.mode} />
          <TableBody>
            {props.dashboard === "market" ? marketCrypto : watchlistCrypto}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
