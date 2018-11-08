export class Contact {

    constructor(fName, lName, messengerID, phoneNumber) {
      this.fName = fName;
      this.lName = lName;
      this.messengerID = messengerID;
      this.phoneNumber = phoneNumber;
      this.messages = new Array();
    }
  }