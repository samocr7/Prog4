import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Message } from './Message.js';
import { MessagingServices } from '../Services/MessagingServices.js';

class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageBody: "",
            reciever: ''
        };
    }

    setMessageBody(text) {
        this.setState({ messageBody: text });
    }

    //need to somehow get a receiver contact object in here
    //messageBody should be whatever they input in the <TextInput/>
    sendMessage() {
        message = new Message("DemoApp", this.messageBody, new Date(), MessagingServices.native);
        receiver.messages.push(message);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Message Screen</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
                    onChangeText={(text) => this.setMessageBody({ text })}
                    multiline={true}
                    value={this.messageBody}
                />
            </View>
        )
    }
}

export default SendMessage;