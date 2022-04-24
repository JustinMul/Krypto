import React from 'react';
import { Message } from './Message';
import InfoIcon from '@mui/icons-material/Info';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Grid} from '@mui/material';


export class MessagesPanel extends React.Component {
  
    state = { input_value: '' }
    send = () => {
        if (this.state.input_value && this.state.input_value !== '') {
            this.props.onSendMessage(this.props.channel.id, this.state.input_value);
            this.setState({ input_value: '' });
        }
    }

    handleInput = e => {
        this.setState({ input_value: e.target.value });
    }
 
    render() {
      console.log("this:",this);
      console.log("channel:",this.props.channel);
      console.log("messages:",this.props.messages);
      const user = JSON.parse(localStorage.getItem('username'));
        let list = <div>There is no messages to show</div>;
        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} user={m.user} time={m.time} img={m.img}/>);
        }
        return (
            <div >
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <InfoIcon style={{color:'red'}}/>
                    <Typography component="h1" variant="h6" align='center'>
                        Chat Room Guidelines
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Do not verbally abuse, attack, embarrass, or threaten anyone else in the chat room, no matter
                    what they might say to you.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <div >{list}</div>
                {this.props.channel &&
                    <Grid item display='flex' justifyContent="space-between" sx={{ width: 550}}>





                        <input type="text" onChange={this.handleInput} value={this.state.input_value} />
                        {/* <button onClick={this.send}>Send</button> */}
                        <Button onClick={this.send} size='medium' variant="contained" endIcon={<SendIcon />}>
                        Send
                        </Button>



                    </Grid>



                }
            </div>);
    }

}

{/* <Grid item display='flex' justifyContent="space-between" sx={{ width: 600}}>
            <TextField
              type="text"

              value={currentMessage}
              inputProps={{style: {width: 400, height: 5}}} 
              placeholder="Write your message here"
              onChange={(event) => {
              setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            
        </Grid> */}
