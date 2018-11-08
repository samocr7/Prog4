import React, { Component } from 'react';

class Message extends Compoennt {
    constrcutor(props) {
        super(props);
        this.state = {
            senderName: '',
            messageBody: '',
            date: '',
            service: ''
        };
    }
}

export default Message;