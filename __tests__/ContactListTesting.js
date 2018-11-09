import {React} from 'react';
import {ContactList} from '../ContactList';

//adding a contact
test('addingContact', () => {
	let testList = new ContactList();
	testList.addContact("Sam","Osman","12345", "1234567890");
	expect(testList.getContactListSize()).toEqual(1);
});

//adding a partial contact (first name only)
test('addingPartialContact', () => {
	let testList = new ContactList();
	testList.addContact("Sam","","","");
	expect(testList.getContactListSize()).toEqual(1);
});
//sorted contact list
test('sortedContact', () => {
	let testList = new ContactList();
	testList.addContact("Sam","Osman","145","1234567890");
	testList.addContact("Catie","Vickers","12345","9876543210");
	testList.addContact("Jorge","Abarca","1245","0987654321"); //should be first in the contact list
	expect(testList.getContactAt(0).fName).toEqual("Jorge");
});
//adding a contact with the same phone # / id
test('sameContactPhone', () => {
	let testList = new ContactList();
	testList.addContact("Sam","Osman","145","1234567890");
	testList.addContact("Jorge","Abarca","1245", "1234567890");
	expect(testList.getContactListSize()).toEqual(1);
	expect(testList.getContactAt(0).fName).toEqual("Sam");
});
//entering contact details with proper format
test('contactDetailsFormat', () =>{
	let testList = new ContactList();
	testList.addContact("Sam","Osman","145","1234873240"); //should be added
	testList.addContact("Sam","Osman","145","abc1238740"); //should not be added
	expect(testList.getContactListSize()).toEqual(1);
});

