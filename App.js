import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {ContactList} from './ContactList';
import {SendMessage} from './SendMessage';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
		<Button title="Contact List" onPress={() => this.props.navigation.navigate('Contact')}/>
		<Button title="Send a Message" onPress={() => this.props.navigation.navigate('Message')}/>
		
      </View>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ContactList/>
      </View>
    );
  }
}

class MessageScreen extends React.Component{
	render() {
		return (
		<View style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}>
		<SendMessage/>
		</View>
		);
	}
	}

class AddContactScreen extends React.Component{
	render() {
		return (
			<View style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}>
		<AddContact/>
		</View>
		);
	}
	}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Contact: ContactScreen,
	Message: MessageScreen,
	AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
