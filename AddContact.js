import React from 'react';
import { Button, View, Text } from 'react-native';
import {Contact} from './Contact';
export class AddContact extends React.Component {
  render() {
    return (
<View>
<TextInput
          style={{height: 40}}
          placeholder="First Name"
          onChangeText={(text) => this.setState({text})}
        />
		<TextInput
          style={{height: 40}}
          placeholder="Last Name"
          onChangeText={(text) => this.setState({text})}
        />
		<TextInput
          style={{height: 40}}
          placeholder="Messenger ID"
          onChangeText={(text) => this.setState({text})}
        />
		<TextInput
          style={{height: 40}}
          placeholder="Phone Number"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}