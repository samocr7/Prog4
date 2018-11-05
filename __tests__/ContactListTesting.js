import {React} from 'react';
import {ContactList} from '../ContactList';




test('exampleTest', () => {
	expect(1+2).toBe(3);
});

//adding a contact
test('addingContact', () => {
	ContactList.addContact("Sam","Osman","12345", "1234567890");
	expect(ContactList.contactList.length).toBe(1);
});
//adding a partial contact (first name only)
test('addingPartialContact', () => {
	ContactList.addContact("Sam","","","");
	expect(ContactList.contactList.length).toBe(1);
});
//sorted contact list
test('sortedContact', () => {
	ContactList.addContact("Sam","Osman","145","1234567890");
	ContactList.addContact("Jorge","Abarca","1245","0987654321");
	ContactList.addContact("Catie","Vickers","12345","9876543210");
	expect(ContactList.contactList.length).toBe(3);
	expect(ContactList.contactList[0].fName).toBe("Jorge");
});
//adding a contact with the same phone # / id
test('sameContactPhone', () => {
	ContactList.addContact("Sam","Osman","145","1234567890");
	ContactList.addContact("Jorge","Abarca","1245", "1234567890");
	expect(ContactList.contactList.length).toBe(1);
	expect(ContactList.contactList[0].fName).toBe("Sam");
});
//entering contact details with proper format
test('contactDetailsFormat', () =>{
	ContactList.addContact("Sam","Osman","145","abc1238740");
	expect(ContactList.contactList.length).toBe(0);
});
