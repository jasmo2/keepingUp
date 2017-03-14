import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';


import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';


const Form = t.form.Form;

const options = {
  fields: {
          txt: {
              label: 'To-Do Item',
              placeholder: 'Aquí algo, heee si.',
              autoFocus: true
          }
      }
};

const myToDo = t.struct({
    txt: t.Str,
    complete: t.Bool
});


class ToDoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      container: this.props.container
    };
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    });
  }
    toDoUpdate() {
        const value = this.refs.form.getValue();
        if (value) {
              const items = this.props.items;
              const index = this.props.id;
              const objVal = { txt: value.txt, complete: value.complete }
              if (index) {
                  items[index] = objVal;
              } else {
                  items.push(objVal);
              }
              /*
                { items } == { items: items }
              */
              Actions.pop({ refresh: { items } });
        }
    }

    render() {
        const { todo, button, buttonText, saveButton } = styles;
        return (
            <View style={todo}>
                <Form
                    ref="form"
                    type={myToDo}
                    options={options}
                    value={this.state.item}
                />
                <TouchableHighlight
                    style={[button, saveButton]}
                    onPress={this.toDoUpdate.bind(this)}
                    underlayColor='#99d9f4'
                >
                    <Text style={buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    todo: {
        marginTop: 100,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    completed: {
        color: '#cccccc'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    }

};

export default ToDoEdit;
