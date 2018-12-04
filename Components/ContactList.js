import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Contact } from './Contact';
import { createStackNavigator } from 'react-navigation';

global.foo = new Array();


export class ContactList extends React.Component {
	contactList = new Array();
	constructor(props) {
		super(props);
	}

	/*componentWillReceiveProps(nextProps) {

		console.log('component will recieve props');
		console.log(nextProps);
		this.addPerson(nextProps.firstName, nextProps.lastName, nextProps.messengerID, nextProps.phoneNumber);
	}*/
	/*
		conList () {
			names <div class="contacts">;
			for (i=0; i < this.contactList.length; i++)
				names += "<li>" + this.contactList[i].fName + " " + this.contactList[i].lName + "</li>";
			names </div>;
			return names;
		}
	 */
	/* this.addContact ("Sam", "Osman", "12345", "403888");
	 this.addContact ("Jorge", "Abarca", "12346", "403777");
	 this.addContact ("Catie", "Vickers", "12347", "4039999"); // populate contact list */

	//  componentWillReceiveProps(nextProps) { 
	// 	 this.addPerson(nextProps);

	//  }

    _addPerson(info) {
		console.log(info);
        newbie = new Contact(info.fName, info.lName, info.messengerID, info.phoneNumber);
		de = this.sortContact(newbie.lName);

		checkPhone = this.phoneCheck(newbie.phoneNumber);
		if (checkPhone == false) //if it's the same number don't add contact
			return;

		checkDup = this.duplicateContact(newbie);
		if (checkDup == true) // if it's a duplicate don't add contact
			return;

		this.foo.splice(de, 0, newbie);
	}

	getContactListSize() {
		return this.contactList.length;
	}

	getContactAt(index) {
		return this.contactList[index];
	}

	sortContact(last) {
		cLet = last.charAt(0);
		ia = 0;
		for (i = 0; i < this.contactList.length; i++) {
			if (cLet.localeCompare(this.contactList[i].lName.charAt(0)) == 1)
				ia = i + 1;
			else if (cLet.localeCompare(this.contactList[i].lName.charAt(0)) == 0) {
				for (p = 1; p < last.length; p++) {
					if (last.charAt(p).localeCompare(this.contactList[i].lName.charAt(p)) == 1)
						ia = i + 1;
					else
						ia = i;
					break;
				}
				if (last.length == i)
					ia = i + 1;
				break;
			}
			else
				ia = i;
			break;
		}
		return ia;
	}

	phoneCheck(num) {
		return /^[\d]*$/.test(num);
	}

	duplicateContact(conct) {
		for (i = 0; i < this.contactList.length; i++) {
			if (//(conct.fName.localeCompare(this.contactList[i].fName) == 0) && 
				//(conct.lName.localeCompare(this.contactList[i].lName) == 0) &&
				//(conct.messengerID == this.contactList[i].messengerID) &&
				(conct.phoneNumber == this.contactList[i].phoneNumber))
				return true;
		}
		return false;
	}


/* render array */

    loadList() {
        bar = new Contact("Developer", "Team", "1", "403777656");
        foo.push(bar);
        
    }

	render() {

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Contact List Screen</Text>
            
			</View>
		);
	}

	

}

export default ContactList;