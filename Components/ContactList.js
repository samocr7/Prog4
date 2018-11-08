import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Contact } from './Contact.js';
class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        };
    }

    addContact = () => {
        
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Contact List Screen</Text>
                <Text>{contactList[0].fName}</Text>
                <Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')} />
            </View>
        );
    }
}

export default ContactList;