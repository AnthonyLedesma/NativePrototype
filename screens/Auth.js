import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import { API_URL } from '../.env.js';

class AuthScreen extends React.Component {
  state = {
    data:'',
    dataSet : false
  }
  static navigationOptions = {
    title: 'Auth',
  };

  async getUserData() {
    let result = await Auth.currentUserInfo()
    .then(res => {return res})
    .catch(err => {return err})
    
    console.log(result)

    this.setState({
      data : JSON.stringify(result),
      dataSet : true
    })
    
  }

  
  componentDidMount() {
    this.getUserData();
  }
  

  // APIFetch() {
  //   fetch(API_URL)
  //           .then(response => response.json())
  //           .then(data => this.setState({ data: JSON.stringify(data) }));
  // }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text>We are now authed!</Text>
        {this.state.dataSet ? <Text>{this.state.data}</Text> : null}
        <Button
          title="Sign Out"
          onPress={() => {
            Auth.signOut();
            if (Auth.currentAuthenticatedUser()) {
              console.log("Signed out. Pushing to Home.")
              this.props.navigation.navigate('Home');
            }
          }} />

        {/* <Button
          title="Fetch With API"
          onPress={() => this.APIFetch()} /> */}
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

export default withAuthenticator(AuthScreen, includeGreetings = true);