import React from "react";
import { Message } from "./Message";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import Input from "@mui/material/Input";

export class MessagesPanel extends React.Component {
  state = { input_value: "" };
  send = () => {
    if (this.state.input_value && this.state.input_value !== "") {
      this.props.onSendMessage(this.props.channel.id, this.state.input_value);
      this.setState({ input_value: "" });
    }
  };

  handleInput = (e) => {
    this.setState({ input_value: e.target.value });
  };

  render() {
    let list = (
      <Typography component="h6" variant="h6" align="center" mt={2}>
        Click the Join Room Button to get started
      </Typography>
    );
    if (this.props.channel && this.props.channel.messages) {
      list = this.props.channel.messages.map((m) => (
        <Message
          key={m.id}
          id={m.id}
          senderName={m.senderName}
          text={m.text}
          user={m.user}
          time={m.time}
          img={m.img}
        />
      ));
    }
    return (
      <div>
        <Grid
          style={{ minHeight: "60vh", maxHeight: "60vh", overflow: "auto" }}
        >
          <div>{list}</div>
        </Grid>
        {this.props.channel && (
          <Grid item display="flex" justifyContent="space-between" mt={2}>
            <Input
              style={{ width: 400, height: 40 }}
              type="text"
              onChange={this.handleInput}
              value={this.state.input_value}
              size="72"
              placeholder="Write your message here.."
              p="2"
              inputProps={{ style: { textAlign: "left" } }}
            />
            <Button
              onClick={this.send}
              size="medium"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid>
        )}
      </div>
    );
  }
}
