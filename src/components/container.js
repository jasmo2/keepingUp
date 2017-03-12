import React, { Component } from 'react';
import { Alert, Text, View, TouchableHighlight } from 'react-native';

import ToDoList from './toDoList';

class Container extends Component {
  constructor(props) {
       super(props);
       this.state = {
           items: [
               { txt: '¡Aprendamos react native!', complete: false },
               { txt: 'To-Doing it', complete: true }
           ]
       };
       this.openItem = this.openItem.bind(this);
   }

   alertMenu() {
      Alert.alert(
        'Quick Menu',
        'presión Larga'
      );
    }
    openItem() {
      Alert.alert(
        'tap',
        'tap tap.. tap'
      );
    }

  render() {
    const { buttonStyle, buttonText, container, newButton } = styles;
    /*
    const container = styles.container;
    const todo = styles.todo;
    */
    return (
      <View style={container} >
        <ToDoList
          items={this.state.items}
          onPressItem={this.openItem}
          onLongPressItem={this.alertMenu.bind(this)}
        />
        <TouchableHighlight
          style={[buttonStyle, newButton]}
          underlayColor='#99d9f4'
          onPress={this.openItem}
        >
          <Text style={buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    marginTop: 65
  },
  buttonStyle: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },
  todo: {
    marginTop: 100,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
};
export default Container;
