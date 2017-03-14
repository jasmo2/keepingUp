import React, { Component } from 'react';
import { ActionConst, Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';

import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import { setItems } from '../actions';

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

  toDoUpdate() {
      const value = this.refs.form.getValue();
      if (value) {
            const items = this.props.items;
            const itemId = this.props.itemId;
            const objVal = { txt: value.txt, complete: value.complete };
            if (itemId) {
                items[itemId] = objVal;
            } else {
                items.push(objVal);
            }
            /*
              { items } == { items: items }
            */
            this.props.setItems(items);
            Actions.pop();
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
                    value={this.props.item}
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
const mapStateToProps = (state) => {
  const { items } = state.itemsReducer;
  const itemId = state.itemReducer.id;
  const item = items[itemId];
  return { items, item, itemId };
};
const mapDispatchToProps = { setItems };

export default connect(mapStateToProps, mapDispatchToProps)(ToDoEdit);
