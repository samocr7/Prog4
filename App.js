import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import ContactScreen from './Screens/ContactScreen.js';
import MessageScreen from './Screens/MessageScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import AddContactScreen from './Screens/AddContactScreen.js';
import MessagingPlatformScreen from './Screens/MessagingPlatformScreen.js';
import SkypeScreen from './Screens/SkypeScreen.js';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        ViewContacts: ContactScreen,
        Message: MessageScreen,
        AddContact: AddContactScreen,
		MessagingPlatform: MessagingPlatformScreen,
		Skype: SkypeScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}
export default App;

