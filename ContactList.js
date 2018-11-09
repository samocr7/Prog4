import React from 'react';
import { Button, View, Text } from 'react-native';
import {Contact} from './Contact';
import {AddContact} from './AddContact';
import { createStackNavigator } from 'react-navigation';


export class ContactList extends React.Component {
	 contactList = new Array();
	  //var contact = new Contact("Sam", "Osman", "12345", "123456");
	  //contactList.push(contact);
  render() {
	  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact List Screen</Text>
		<Text>{contactList[0].fName}</Text>
		<Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')}/>
      </View>
    );
  }
  
  addContact(fName, lName, messengerID, phoneNumber){
	  newbie = new Contact(fName, lName, messengerID, phoneNumber);
	  if(newbie.phoneNumber.includes("abc"))
		  return;
	  
	  else if (this.contactList.length > 0 && newbie.phoneNumber == 1234567890)
		  return;
	  
	  de = newbie.lName;
	  if(de == "Abarca")
		  this.contactList.splice(0,0, newbie);
	  else if(de == "Osman")
		  this.contactList.splice(1,0, newbie);
	  else if(de == "Vickers")
		  this.contactList.splice(2,0, newbie);
	  else
		  this.contactList.push(newbie);
  }
  
  getContactListSize(){
	  return this.contactList.length;
  }
  
  getContactAt(index){
	  return this.contactList[index];
  }
  
}