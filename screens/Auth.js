import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

class AuthScreen extends React.Component {
    static navigationOptions = {
        title: 'Auth',
      };

      signOutClick() {

      }
    
    render() {
        const {navigate} = this.props.navigation;
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
                      }}}/>
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