
function MarketCrypto(props) {
  return (
    <li>
      <img src={props.image} alt={props.name}></img>
      <div>
        <span>{props.name}</span>

        <p>{props.price_change_percentage_24h}</p>
      </div>
      <div>{props.current_price}</div>
      <div>{props.last_updated}</div>
    </li>
  )
}

export default MarketCrypto
