import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { API_URL } from './.env.js';


export default class App extends Component {
  state = {
    data:''
  };

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({ data: JSON.stringify(data) }));
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text>The API Call should be here:</Text>
        <Text>{this.state.data}</Text>
      </View>
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
});
