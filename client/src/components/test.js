
export default function Test(props) {
  return (
    <li>
      <img src={props.image} alt={props.name}></img>
      <div>
        <span>{props.name}</span>
        <span>{props.price_change_percentage_24h}</span>
      </div>
      <div>{props.current_price}</div>
      <div>{props.last_updated}</div>
    </li>
  );
}