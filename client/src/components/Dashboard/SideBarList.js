import { Routes, Route, Link } from 'react-router-dom';

export default function SideBarList () {

  return (
   
    <div>
      <div> 
        <img src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="image"/>
        <p>Justin</p>
      </div>
      <ul>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
        <Link to="/news">News</Link>
        </li>
        <li>
        <Link to="/chatrooms">Chat</Link>
        </li>
        <li>
        <Link to="/cryptotools">Tools</Link>
        </li>
        <li>
        <Link to="/logout">Log Out</Link>
        </li>
      </ul>
      </div>
   
  )
}





