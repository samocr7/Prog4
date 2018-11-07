export class Contact{
fName : "";
lName : "";
messengerID : "";
phoneNumber : "";
rMessages: []; //received messages
  constructor(fName, lName, messengerID, phoneNumber){
  this.fName = fName;
  this.lName = lName;
  this.messengerID = messengerID;
  this.phoneNumber = phoneNumber;
  this.messages = new Array();
  }
  }