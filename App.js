import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Nav from './components/Nav';
import Main from './components/Main';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        header: <Nav/>
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
};