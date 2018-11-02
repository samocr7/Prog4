import React from 'react';
import { Button, View, Text } from 'react-native';
import {Contact} from './Contact';
import {AddContact} from './AddContact';
import { createStackNavigator } from 'react-navigation';
export class ContactList extends React.Component {
  render() {
	  var contactList = new Array();
	  var contact = new Contact("Sam", "Osman", "12345", "123456");
	  contactList.push(contact);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact List Screen</Text>
		<Text>{contactList[0].fName}</Text>
		<Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')}/>
      </View>
    );
  }
  
}