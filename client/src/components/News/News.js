import { React } from 'react'
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {descriptionspliter, titlespliter} from '../../helpers/descriptionspliter';
import { newsDateConvert } from '../../helpers/dateConvert';
import Skeleton from '@mui/material/Skeleton';

import Paper from '@mui/material/Paper';


const News = ({title, image, description, date, source}) => {

  
  return (
  <Box m="auto">  
        {/* <Item sx={{ gridRow: '1', gridColumn: 'span 2' }}> */}
        <Paper elevation={3}> 
          <Card sx={{ maxWidth: 300, mb:4}}>
            <CardMedia
              component="img"
              alt="news"
              height="140"
              image={image}
            />
            <Divider variant="inset"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {newsDateConvert(date)}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {titlespliter(title)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {(description) ? descriptionspliter(description) : 
                <div ><Skeleton animation={false} />
                <Skeleton animation={false} />
                <Skeleton animation={false} /></div> }
              </Typography>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions>
              <Button size="small" onClick = {(e) => (window.location.href = `${source}`)}>Source</Button>
            </CardActions>
          </Card>
      </Paper>
  </Box>
  )
}

export default News;