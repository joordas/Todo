import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentWillMount() {
    fetch('http://10.2.245.20:5000/todos', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  handleInputChange(text) {
    this.setState({
      newTodo: text
    });
  }
  addTodo() {
    if (this.state.newTodo === '') {
      return;
    }
    fetch('http://10.2.245.20:5000/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
      .catch(error => console.log(error))
      .then(res => res.json())
      .then(todo => {
        const todos = [todo, ...this.state.todos];
        this.setState({ todos, newTodo: '' });
      });
    // const todos = [...this.state.todos, this.state.newTodo];
    //
  }
  removeTodo(i) {
    const todos = [
      ...this.state.todos.slice(0, i),
      ...this.state.todos.slice(i + 1)
    ];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Todo List</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleInputChange.bind(this)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.addTodo.bind(this)}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo.name}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => this.removeTodo.call(this, i)}
              >
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Todo;
