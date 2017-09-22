import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const vars = {
  blue: '#03A9F4',
  lightGrey: '#aaaaaa'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20
  },
  h1: {
    fontSize: 25,
    color: vars.blue
  },
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
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: vars.lightGrey
  },
  todoText: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 22
  }
});

export default styles;
