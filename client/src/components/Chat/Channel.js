import React from 'react';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import { Grid } from '@mui/material';

export class Channel extends React.Component {

    click = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <Grid item align="center" xs={6}>
            <Card sx={{ maxWidth: 250 , height: 300, mb: 3 } } align="center">
            <Typography fontSize = {20}>{this.props.name} </Typography>
         
            <img src={this.props.img} alt={this.props.name} height={150}/>
            <CardActions align="center">
                <div>
              <Typography variant="body2" color="text.secondary">
                {this.props.dis}
              </Typography>
              Total Users : {this.props.participants}
                <div>
                    <Button size="medium" variant="contained" onClick={this.click} >Join Room</Button>
                </div>
              </div>
            </CardActions>
            </Card>
            </Grid>    
        )
    }
}
