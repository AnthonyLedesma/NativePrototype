import React from 'react';
import { StyleSheet } from 'react-native';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';

Amplify.configure(amplify);

import AppContainer from './navigator/MyNavigator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


