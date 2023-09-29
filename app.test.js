import React from 'react';
import {View, Text, TextInput} from 'react-native';
import App from './App';
import renderer from 'react-test-renderer';
it('Render Correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
