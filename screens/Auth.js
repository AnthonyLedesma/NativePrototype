import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';

class AuthScreen extends React.Component {
    static navigationOptions = {
        title: 'Auth',
      };
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>We are now authed!</Text>
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