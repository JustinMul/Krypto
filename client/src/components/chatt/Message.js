import React from 'react';


export class Message extends React.Component {

    render() {
        return (
            <div>
                <div><b>{this.props.senderName}</b></div>
                <span>{this.props.text}</span>
            </div>
        )
    }
}