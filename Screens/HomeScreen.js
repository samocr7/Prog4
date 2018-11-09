import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Contact List" onPress={() => this.props.navigation.navigate('ViewContacts')} />
                <Button title="Send a Message" onPress={() => this.props.navigation.navigate('MessagingPlatform')} />
            </View>
        );
    }
}

export default HomeScreen;