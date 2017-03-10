import { Text, View } from 'react-native';
import React, { Component } from 'react';

class Container extends Component {

  render() {
    const { container, todo } = styles;
    /*
        const container = styles.container;
        const todo = styles.todo;
    */
    return (
      <View style={container} >
        <Text style={todo}>I am the ToDo Container</Text>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1
  },
  todo: {
    marginTop: 100,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
};
export default Container;
