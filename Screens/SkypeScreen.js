import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

class SkypeScreen extends Component {

constructor(props){
	super(props);
	this.state = {text1:"",text2:""};
}
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Log in with your Skype</Text>
				<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
		autoCorrect={false}
		textContentType='username'
		placeholder='Username'
        onChange={(text1) => this.setState({text1})}
        value={this.state.text1}
      />
	  
	  <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
		autoCorrect={false}
		textContentType = 'password'
		placeholder='Password'
        onChange={(text2) => this.setState({text2})}
        value={this.state.text2}
      />
	  
                <Button title="Log in" onPress={() => this.props.navigation.navigate('Message')} />
            </View>
        );
    }
}

export default SkypeScreen;