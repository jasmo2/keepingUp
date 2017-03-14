import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Container from './components/container';
import ToDoEdit from './components/editToDo';

class RouterComponent extends Component {
  render() {
    return (
      <Router
        backAndroidHandler={() => (true)}
        schema='withoutAnimation'
      >
        <Scene key="root" >
          <Scene
            panHandlers={null}
            key="index"
            component={Container}
            initial
          />
          <Scene
            panHandlers={null}
            key="edit"
            component={ToDoEdit}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
