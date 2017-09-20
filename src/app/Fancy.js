import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Fancy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <Text style={styles.h1}>Hey Jordas</Text>
      </View>
    );
  }
}

export default Fancy;
