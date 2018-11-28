import React, { Component } from 'react';
import { View , Button, TextInput } from 'react-native';
import { ContactList } from './ContactList.js';

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

    _register = () => {
        const payload = {
            firstName: this.firstName,
            lastName: this.lastName,
            messengerId: this.messengerId,
            phoneNumber: this.phoneNumber
        }
        console.log(payload);
       // ContactList.addPerson(payload.firstName, payload.lastName, payload.messengerId, payload.phoneNumber);
    }

    onSubmit () {
        console.log(this.getSnapshotBeforeUpdate);
        //onPress={() => navigate('Question1',  { stupidCount: this.state.stupidCount } )}
    }

    render() {
        return (
            <View>
                <TextInput
                    id = "firstName"
                    style={{ height: 40 }}
                    placeholder="First Name"
                    onChangeText={(text) => this.firstName = text}
                />
                <TextInput
                    id = "lastName"
                    style={{ height: 40 }}
                    placeholder="Last Name"
                    onChangeText={(text) => this.lastName = text}
                />
                <TextInput
                    id = "messengerId"
                    style={{ height: 40 }}
                    placeholder="Messenger ID"
                    onChangeText={(text) => this.messengerId = text}
                />
                <TextInput
                    id = "phoneNumber"
                    style={{ height: 40 }}
                    placeholder="Phone Number"
                    onChangeText={(text) => this.phoneNumber = text}
                />
                <Button title = "Submit" onPress ={this._register} />
            </View>
        )
    }
}

export default AddContact;