import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  StyledView,
  StyledNav,
  LogoText,
} from './../styles';

type Props = {};
class Nav extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <StyledNav>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{height: 26, width: 26}} resizeMode='contain' source={require('./../daylists_logo.png')}/>
            <LogoText>DayLists</LogoText>
          </View>
          <Text>H</Text>
        </StyledNav>
      </SafeAreaView>
    );
  }
};

export default Nav;