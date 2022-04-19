import { React } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const News = ({title, image, description, date, source}) => {
  
  return (

    <Card m={{ maxWidth: 80}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <Divider variant="inset"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {date}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Divider variant="middle"/>
      <CardActions>
        <Button size="small" onClick = {(e) => (window.location.href = `${source}`)}>Source</Button>
      </CardActions>
    </Card>
  )
}

export default News;