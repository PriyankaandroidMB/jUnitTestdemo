import React from 'react';
import {View, Text, TextInput} from 'react-native';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'test',
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          testID={'username'}
          onChangeText={text => this.change(text)}
          style={{backgroundColor: 'grey', marginBottom: 15}}
          placeholder="Enter Username"
        />
      </View>
    );
  }
}
