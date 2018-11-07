import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import {Contact} from './Contact';
import {Message} from './Message';
import {MessagingService} from './MessagingServices';


//redirect to this screen when user selects a contact from their contact list
export class SendMessage extends React.Component{
	messageBody: "";
	receiver: null;
	constructor(receiver) {
		super();
    this.messageBody = "";
	this.receiver = receiver;
  }
	
	render() {
		return (
		<View style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}>
		<Text>Message Screen</Text>
		<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
        onChangeText={(text) => this.setMessageBody({text})}
		multiline={true}
        value={this.messageBody}
      />
		</View>
		);
	}
	setMessageBody(text){
		this.messageBody = text;
	}
	//need to somehow get a receiver contact object in here
	//messageBody should be whatever they input in the <TextInput/>
	sendMessage(){
		message = new Message("DemoApp", this.messageBody, new Date(), MessagingService.native);
		receiver.messages.push(message);
	}
	}