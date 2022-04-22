import React from 'react'

import MyVideo from "../videoIcon/66242-cryptocurrency.mp4";



const MyVideoComponent = () => {
  return (
    <div><video controls autostart autoPlay src={MyVideo} type="video/mp4" /></div>
  )
}

export default MyVideoComponent