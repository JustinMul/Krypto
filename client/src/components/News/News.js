import { React } from 'react'
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {descriptionspliter, titlespliter} from '../../helpers/descriptionspliter';
import { newsDateConvert } from '../../helpers/dateConvert';
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';


const News = ({title, image, description, date, source, loading}) => {

  if (loading){
    return (
    <Box m="auto" onClick = {(e) => (window.open(`${source}`) )}>
          <Paper elevation={3}> 
            <Card sx={{ maxWidth: 300, mb:4}}>
              <CardMedia
                component="img"
                alt="news"
                height="140"
                image={image}
              />
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
            </Card>
        </Paper>
    </Box>
    )
  } else {
    return (
      <Box m="auto">  
        <Paper elevation={3}> 
          <Card sx={{ maxWidth: 300, mb:4}}>
          <Skeleton variant="rectangular" animation="wave" width={300} height={140} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <Skeleton animation="wave" />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
              <Skeleton animation="wave"/>
              <Skeleton animation="wave"/>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    )
  }
}

export default News;