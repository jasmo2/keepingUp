import React, { Component } from 'react';
import { ListView } from 'react-native';

import Item from './item';


class ToDoList extends Component {

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowID) => (
          <Item
            item={rowData}
            onPress={() => this.props.onPressItem(rowData, rowID)}
            onLongPress={() => this.props.onLongPressItem(rowData, rowID)}
          />
        )}
      />
    );
  }
}

export default ToDoList;
