import { Link } from "react-router-dom";
import urlSpaceReplacer from "../../helpers/urlSpaceReplacer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { dateConvert } from "../../helpers/dateConvert";
import ClearIcon from "@mui/icons-material/Clear";
import "./TrendingCrypto.scss";

const MarketCrypto = (props) => {
  let cleanedUrl = urlSpaceReplacer(props.id);
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    if (props.mode === "dark") {
      setTextColor("white");
    } else if (props.mode === "light") {
      setTextColor("black");
    }
  }, [props.mode]);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        <Link to={`/crypto/${cleanedUrl}`}>
          <img
            className="singleCryptoImg"
            src={props.image}
            alt={props.id}
            width="50"
          />
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link
          to={`/crypto/${cleanedUrl}`}
          style={{
            textDecoration: "none",
            color: textColor,
          }}
        >
          {props.name}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link
          to={`/crypto/${cleanedUrl}`}
          style={{
            textDecoration: "none",
            color: textColor,
          }}
        >
          $ {props.current_price}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link
          to={`/crypto/${cleanedUrl}`}
          style={{
            textDecoration: "none",
            color:
              Math.round(props.price_change_percentage_24h) > 0
                ? "green"
                : "red",
          }}
        >
          <div className="shiftdown">
            {Math.round(props.price_change_percentage_24h)}%
            {Math.round(props.price_change_percentage_24h) > 0 ? (
              <div className="flexdown">
                <FileUploadIcon />
              </div>
            ) : (
              <div className="flexdown">
                <FileDownloadIcon />{" "}
              </div>
            )}
          </div>
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link
          to={`/crypto/${cleanedUrl}`}
          style={{
            textDecoration: "none",
            color: textColor,
          }}
        >
          {dateConvert(props.last_updated)}
        </Link>
      </TableCell>
      {props.dashboard === "watchlist" ? (
        <TableCell align="center">
          <Button aria-label="like" onClick={() => props.setDeleted(props.id)}>
            <ClearIcon style={{ color: red[500] }} />
          </Button>
        </TableCell>
      ) : (
        <TableCell align="center">
          <Button
            aria-label="like"
            onClick={() => props.setFav([props.id, props.image])}
          >
            <FavoriteIcon style={{ color: red[500] }} />
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default MarketCrypto;
