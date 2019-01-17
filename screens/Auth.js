import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import { API_URL } from '../.env.js';

import ServiceLister from '../components/ServiceLister';
import { Container, Button, Text } from 'native-base';

const sampleData = [
  {
    name: 'Anthony',
    avatar:
      'https://s.gravatar.com/avatar/580f8ff7fe0520306252b153e38b2acb?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpa.png',
    services: ['Web Development', 'Mobile Applications', 'Marketing'],
    pricing: 1000,
  },
];

class AuthScreen extends React.Component {
  state = {
    data: '',
    dataSet: false,
  };
  static navigationOptions = {
    title: 'Auth',
  };

  async getUserData() {
    let result = await Auth.currentUserInfo()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    this.setState({
      data: JSON.stringify(result),
      dataSet: true,
    });
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
        <Card title="CARD WITH DIVIDER">
          {sampleData.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Text style={styles.name}>{u.name}</Text>
                <ServiceLister services={u.services} />
              </View>
            );
          })}
        </Card>
        <Container style={styles.container}>
          <Button>
            <Text> Here is a button wrapped in a container.</Text>
          </Button>
        </Container>

        <Text>We are now authed!</Text>
        {this.state.dataSet ? <Text>{this.state.data}</Text> : null}
        <Button
          title="Sign Out"
          onPress={() => {
            Auth.signOut();
            if (Auth.currentAuthenticatedUser()) {
              console.log('Signed out. Pushing to Home.');
              this.props.navigation.navigate('Home');
            }
          }}
        ><Text>Sign Out</Text></Button>
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
