export class Message{
senderName: "";
messageBody: "";
date: "";
service: "";
  constructor(senderName, messageBody, date, service){
  this.senderName = senderName;
  this.messageBody = messageBody;
  this.date = date;
  this.service = service;
  }
  }