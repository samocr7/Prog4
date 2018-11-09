import React from 'react';
import { Button, View, Text } from 'react-native';
import {Contact} from './Contact';
import { createStackNavigator } from 'react-navigation';


export class ContactList extends React.Component {
	 contactList = new Array();
	  //var contact = new Contact("Sam", "Osman", "12345", "123456");
	  //contactList.push(contact);
  render() {
	  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact List Screen</Text>
		<Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')}/>
      </View>
    );
  }
  
addContact(fName, lName, messengerID, phoneNumber){
	  newbie = new Contact(fName, lName, messengerID, phoneNumber);
	  de = this.sortContact(newbie.lName);
		
		checkPhone = this.phoneCheck(newbie.phoneNumber);
	  if(checkPhone == false) //if it's the same number don't add contact
		  return;
		
		checkDup = this.duplicateContact(newbie);		
	  if(checkDup == true) // if it's a duplicate don't add contact
		  return;
	  
	  this.contactList.splice(de, 0, newbie);
  }
  
  getContactListSize(){
	  return this.contactList.length;
  }
  
  getContactAt(index){
	  return this.contactList[index];
  }
  
  sortContact(last){
	  cLet = last.charAt(0);
	  ia = 0;
	  for (i=0; i < this.contactList.length; i++){
		if(cLet.localeCompare(this.contactList[i].lName.charAt(0)) == 1)
				ia = i+1;
		else if(cLet.localeCompare(this.contactList[i].lName.charAt(0)) == 0){
			for (p=1; p< last.length; p++){
				if(last.charAt(p).localeCompare(this.contactList[i].lName.charAt(p)) == 1)
					ia = i+1;
				else
					ia = i;
					break;
			}
		if(last.length == i)
			ia = i+1;
			break;
		}
		else 
			ia = i;
			break;
	  }
	return ia;
  }
  
  phoneCheck(num){
	  return /^[\d]*$/.test(num);
  }
  
  duplicateContact(conct){
	 for (i=0; i < this.contactList.length; i++){
		 if(//(conct.fName.localeCompare(this.contactList[i].fName) == 0) && 
		 //(conct.lName.localeCompare(this.contactList[i].lName) == 0) &&
		 //(conct.messengerID == this.contactList[i].messengerID) &&
		 (conct.phoneNumber == this.contactList[i].phoneNumber) )
			return true;
	 }
	return false;
  }
  
}