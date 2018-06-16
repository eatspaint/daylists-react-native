/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
} from 'react-native';
import glamorous, {ThemeProvider} from 'glamorous-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const StyledView = glamorous.view({
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fff',
})

const Nav = glamorous.view({
  width: '100%',
  // height: 71,
  flexDirection: 'row',
  borderBottomColor: '#ebebeb',
  borderBottomWidth: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15,
  paddingTop: 36,
})

const Welcome = glamorous.text({
  fontSize: 20,
  textAlign: 'center',
  marginLeft: 2,
})

const Instructions = glamorous.text({
  textAlign: 'center',
  color: '#ede',
  marginBottom: 5,
})

type Props = {};
export default class App extends Component<Props> {
  platformName = ():string => {
    return `Running on ${Platform.OS}`;
  }

  render() {
    return (
      <StyledView>
        <Nav>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{height: 26, width: 26}} resizeMode='contain' source={require('./daylists_logo.png')}/>
            <Welcome>DayLists</Welcome>
          </View>
          <Text>H</Text>
        </Nav>
        <Instructions>
          To get started, edit App.js
        </Instructions>
        <Instructions>
          {instructions}
        </Instructions>
        <Instructions>
          {this.platformName()}
        </Instructions>
      </StyledView>
    );
  }
}
