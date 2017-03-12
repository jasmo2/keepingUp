import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';


class Item extends Component {

    render() {
        const { completed, container, txt } = styles;
        const item = this.props.item;
        return (
            <View>
              <TouchableHighlight
                  onPress={this.props.onPress}
                  onLongPress={this.props.onLongPress}
              >
                <View style={container}>
                  <Text style={[txt, item.complete && completed]}>
                    {item.txt}
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={styles.hr} />
            </View>
        );
    }
}

const styles = {

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    completed: {
      color: '#cccccc'
    },
    hr: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      height: 1,
      marginLeft: 0,
      marginRight: 0,
    },
    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },
};

export default Item;
