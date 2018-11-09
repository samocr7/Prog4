import {React} from 'react';
import {ContactList} from '../Components/ContactList';

//adding a contact
test('addingContact', () => {
	let testList = new ContactList();
	testList.addPerson("Sam","Osman","12345", "1234567890");
	expect(testList.getContactListSize()).toEqual(1);
});

//adding a partial contact (first name only)
test('addingPartialContact', () => {
	let testList = new ContactList();
	testList.addPerson("Sam","","","");
	expect(testList.getContactListSize()).toEqual(1);
});
//sorted contact list
test('sortedContact', () => {
	let testList = new ContactList();
	testList.addPerson("Sam","Osman","145","1234567890");
	testList.addPerson("Catie","Vickers","12345","9876543210");
	testList.addPerson("Jorge","Abarca","1245","0987654321"); //should be first in the contact list
	expect(testList.getContactAt(0).fName).toEqual("Jorge");
});
//adding a contact with the same phone # / id
test('sameContactPhone', () => {
	let testList = new ContactList();
	testList.addPerson("Sam","Osman","145","1234567890");
	testList.addPerson("Jorge","Abarca","1245", "1234567890");
	expect(testList.getContactListSize()).toEqual(1);
	expect(testList.getContactAt(0).fName).toEqual("Sam");
});
//entering contact details with proper format
test('contactDetailsFormat', () =>{
	let testList = new ContactList();
	testList.addPerson("Sam","Osman","145","1234873240"); //should be added
	testList.addPerson("Sam","Osman","145","abc1238740"); //should not be added
	expect(testList.getContactListSize()).toEqual(1);
});
//entering contact details with proper format
test('phoneCheck', () =>{
	let testList = new ContactList();
	
	let Check = testList.phoneCheck("12sdasd2345");
	expect(Check).toEqual(false);
	
});
// sorted contact v2
test('sortedContactv2', () => {
	let testList = new ContactList();
	testList.addPerson("Sam","Abap","145","1234567890");
	testList.addPerson("Catie","Azssd","12345","9876543210");
	let Index = testList.sortContact("Abarca"); //should be first in the contact list
	expect(testList.getContactAt(0).fName).toEqual("Sam");
	expect(Index).toEqual(0);
}); 