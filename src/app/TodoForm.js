import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import { vars } from './styles';

const TodoForm = props => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleInputChange}
    />
    <TouchableOpacity style={styles.button} onPress={props.newTodo}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: '#000000',
    marginTop: 15,
    padding: 30,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  input: {
    flex: 0.7
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: vars.blue,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: vars.blue
  }
});

export default TodoForm;
