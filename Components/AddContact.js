import React, { Component } from 'react';
import { View , Button } from 'react-native';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            messengerId: 0
        };
    }

    onChange = (el) => {
        if (el.target.id === 'firstName') {
            this.setState({ firstName: el.target.value });
        } else if (el.target.id === "lastName") {
            this.setState({ lastName: lastName });
        } else if (el.target.id === "messengerId") {
            this.setState({ messengerId: messengerId });
        } else if (el.target.id === "phoneNumber") {
            this.setState({ phoneNumber: phoneNumber });
        }
    }

    onSubmit () {
        //onPress={() => navigate('Question1',  { stupidCount: this.state.stupidCount } )}
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="First Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Last Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Messenger ID"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Phone Number"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Button title = "Submit" onPress ={() => this.onSubmit.bind(this)} />
            </View>
        )
    }
}

export default AddContact;