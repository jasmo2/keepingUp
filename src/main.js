import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RouterComponent from './router';
import reducers from './reducers';


class todoList extends Component {

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

module.exports = todoList;
