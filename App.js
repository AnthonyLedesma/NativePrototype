import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withAuthenticator } from 'aws-amplify-react-native';
import { AppLoading, Font } from 'expo';
// you can also import from @react-navigation/native

import HomeScreen from './screens/Home';
import LoginView from './screens/Signin';

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
import MaterialIcons from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Signin: { screen: LoginView },
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        MaterialIcons
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return <View>
        <Text>Here is text</Text>
      </View>;
    }

  }
}
