import React from 'react';
import { Channel } from './Channel';
import { Grid } from '@mui/material';

export class ChannelList extends React.Component {

    handleClick = id => {
        this.props.onSelectChannel(id);
    }

    render() {

        let list = <div >There is no channels to show</div>;
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} img={c.img} dis={c.dis} participants={c.participants} onClick={this.handleClick} />);
        }
        return (
            <div>
               <Grid container>
                        
                        {list}

          
                </Grid>
            </div>
            );
    }

}

 // {
//     const user = JSON.parse(localStorage.getItem('username'));
//     const date = new Date()
//     const options = {
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//     };
//     const time = new Intl.DateTimeFormat('en-US', options).format(date)
//     return (
//         <Card sx={{ width: 300 , padding:0.5, marginTop:3, marginBottom:3} }>
//         <CardActionArea>
//         <Chip
//         avatar={<Avatar alt="Natacha" src={user.img} />}
//         label={user.name}
//         variant="outlined"
//         />
//         <CardContent>
//         <Typography component="h8" variant="h8">Sent at: {time}</Typography>
//         <Typography variant="body2" color="text.secondary">
//         {this.props.text}
//         </Typography>
//         </CardContent>
//         </CardActionArea>
//     </Card>
//     )
// }
// }