import React, { Component } from 'react';
import AddContact from '../Components/AddContact.js';
import { View } from 'react-native';

class AddContactScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <AddContact />
            </View>
        )
    }
}
export default AddContactScreen;