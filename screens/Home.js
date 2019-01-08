import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { API_URL } from '../.env.js';
import { AppFontLoader } from '../utils/AppFontLoader';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    state = {
        data: ''
    };

    componentDidMount() {

        // fetch(API_URL)
        //     .then(response => response.json())
        //     .then(data => this.setState({ data: JSON.stringify(data) }));
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <AppFontLoader>
                <View style={styles.container}>
                    <Text>The API Call should be here:</Text>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigate('Signin')}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>
                    <Text>{this.state.data}</Text>
                </View>
            </AppFontLoader>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
});