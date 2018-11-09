import React, { Component } from 'react';
import { ContactList } from '../Components/ContactList.js';
import { View, Text } from 'react-native'

//<ContactList /> put between views
class ContactScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ContactList />
            </View>
        );
    }
}

export default ContactScreen;
