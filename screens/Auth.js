import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import { API_URL } from '../.env.js';
import { Ionicons } from '@expo/vector-icons';

import ServiceLister from '../components/ServiceLister';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const sampleData = {
  name: 'Anthony',
  avatar:
    'https://s.gravatar.com/avatar/580f8ff7fe0520306252b153e38b2acb?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpa.png',
  services: ['Web Development', 'Mobile Applications', 'Marketing'],
  pricing: 1000,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis imperdiet sem. Fusce in erat felis. Vivamus pulvinar vel turpis ac condimentum. Nunc quis dolor vitae felis vehicula feugiat et et erat. Vivamus sagittis velit sed urna auctor varius. Cras eu nibh bibendum lectus dictum ultricies rutrum a enim.',
};
let authObject;

class AuthScreen extends React.Component {
  state = {
    data: '',
    dataSet: false,
  };
  static navigationOptions = {
    title: 'Available Jobs',
  };

  async getUserData() {
    let result = await Auth.currentUserInfo()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    this.setState(
      {
        data: JSON.stringify(result),
        dataSet: true,
      },
      () => {
        this.parseObject(this.state.data);
      }
    );
  }

  componentDidMount() {
    this.getUserData();
  }

  // APIFetch() {
  //   fetch(API_URL)
  //           .then(response => response.json())
  //           .then(data => this.setState({ data: JSON.stringify(data) }));
  // }
  parseObject(json) {
    authObject = JSON.parse(json);
  }

  signOut() {
    Auth.signOut();
    if (Auth.currentAuthenticatedUser()) {
      console.log('Signed out. Pushing to Home.');
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Container>
          <Content>
            <Card>
              <CardItem header>
                <Left>
                  <Thumbnail source={{ uri: sampleData.avatar }} />
                  <Text>{sampleData.name}</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{sampleData.description}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Grid>
                    <Col>
                      <Text>Services:</Text>
                      <ServiceLister services={sampleData.services} />
                    </Col>
                    <Col>
                      
                        <Button
                          style={{ marginTop: 2, minWidth: 55}}
                          primary>
                          <Text>
                            <Ionicons name="md-mail" size={25} color="white" />
                          </Text>
                        </Button>
                      
                      <Right>
                        <Button
                          style={{ marginTop: 2, minWidth: 55 }}
                          iconCenter
                          primary>
                          <Text
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>{' '}
                            <Ionicons
                              name="md-phone-portrait"
                              size={25}
                              color="white"
                            />
                          </Text>
                        </Button>
                      </Right>
                    </Col>
                  </Grid>
                </Body>
              </CardItem>
              <CardItem footer>
                <Body>
                  <Button block success>
                    <Text>Prices start at ${sampleData.pricing}</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
        <Container style={styles.signOut}>
          {this.state.dataSet ? (
            <Text>{JSON.stringify(authObject)}</Text>
          ) : null}
        </Container>
        <Button onPress={this.signOut} footer full danger>
          <Text>Sign Out</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  signOut: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(AuthScreen);
