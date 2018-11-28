import React, { Component } from 'react';
import { ContactList } from '../Components/ContactList.js';
import { View, Text, Button } from 'react-native'

//<ContactList /> put between views
class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactToAdd: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contactToAdd: nextProps
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ContactList
                    contactToAdd = {this.state.contactToAdd}
                />
				<Button title="Add Contact" onPress={() => this.props.navigation.navigate('AddContact')} />
            </View>
        );
    }
}

export default ContactScreen;
