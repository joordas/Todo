/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Todo from './src/app/Todo';

const Main = () => <Todo />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  h1: {
    fontSize: 20,
    color: '#E91E63'
  },
  input: {
    width: 80
  }
});

AppRegistry.registerComponent('Main', () => Main);
