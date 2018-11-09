import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class MessagingPlatformScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Choose a Messaging Service</Text>
                <Button title="VMessenger" onPress={() => this.props.navigation.navigate('Message')} />
                <Button title="Skype" onPress={() => this.props.navigation.navigate('Skype')} />
            </View>
        );
    }
}

export default MessagingPlatformScreen;