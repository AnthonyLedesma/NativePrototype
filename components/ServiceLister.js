import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ServiceLister extends React.Component {
  state = {
    services: this.props.services,
  };

  mapper(services) {
    console.log(services);
    return services.map((value, i) => <Text key={i}>{value}</Text>);
  }

  render() {
    return (
      <View style={styles.centerView}>{this.mapper(this.state.services)}</View>
    );
  }
}

const styles = StyleSheet.create({
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
