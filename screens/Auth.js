import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import { API_URL } from '../.env.js';

class AuthScreen extends React.Component {
  state = {
    data
  }
  static navigationOptions = {
    title: 'Auth',
  };

  APIFetch() {
    fetch(API_URL)
            .then(response => response.json())
            .then(data => this.setState({ data: JSON.stringify(data) }));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>We are now authed!</Text>
        <Button
          title="Sign Out"
          onPress={() => {
            Auth.signOut();
            if (Auth.currentAuthenticatedUser()) {
              console.log("Signed out. Pushing to Home.")
              this.props.navigation.navigate('Home');
            }
          }} />

        <Button
          title="Fetch With API"
          onPress={() => this.APIFetch()} />
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

export default withAuthenticator(AuthScreen);