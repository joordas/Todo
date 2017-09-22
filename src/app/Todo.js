import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Reddit } from './Reddit';
import TodoForm from './TodoForm';
import styles from './styles';
import { connect } from 'react-redux';
import { CREATE_TODO } from './reducers';

const mapActionsToProps = dispatch => ({
  createTodo(todo) {
    dispatch({ type: 'CREATE_TODO', payload: todo });
  }
});

const mapStateToProps = state => ({
  todos: state.todos
});

class _Todo extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  handleInputChange(text) {
    this.setState({
      newTodo: text
    });
  }
  newTodo() {
    if (this.state.newTodo === '') {
      return;
    }
    this.props.createTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoForm
          handleInputChange={this.handleInputChange.bind(this)}
          newTodo={this.newTodo.bind(this)}
          value={this.state.newTodo}
        />
        <View style={styles.todos}>
          {this.props.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);
