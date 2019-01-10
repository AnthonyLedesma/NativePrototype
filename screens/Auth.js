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

//    currentUserInfo
//  Object {
//  "attributes": Object {
//   "email": "anthonymledesma@gmail.com",
//     "email_verified": true,
//    "phone_number": "+16238249691",
//"phone_number_verified": false,
//    "sub": "1ffc8b93-136d-4ba5-b6d8-370a12ee528b",
//   },
//  "id": "us-west-2:29cabcfa-be3a-48b0-9dcc-5afe1fda4356",
// "username": "anthonymledesma@gmail.com",
// }
    let currentUserInfo = await Auth.currentUserInfo()
    .then(res => {return res})
    .catch(err => {return err})
    console.log('currentUserInfo')
    console.log(currentUserInfo)


    let currentCredentials = await Auth.currentCredentials()
    .then(res => {return res})
    .catch(err => {return err})
    console.log('currentCredentials')
    console.log(currentCredentials)

    let currentAuthenticatedUser = await Auth.currentAuthenticatedUser()
    .then(res => {return res})
    .catch(err => {return err})
    console.log('currentAuthenticatedUser')
    console.log(currentAuthenticatedUser)


    let userAttributes = await Auth.userAttributes()
    .then(res => {return res})
    .catch(err => {return err})
    console.log('userAttributes')
    console.log(userAttributes)
    
    let userSession = await Auth.userSession()
    .then(res => {return res})
    .catch(err => {return err})
    console.log('userSession')
    console.log(userSession)

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