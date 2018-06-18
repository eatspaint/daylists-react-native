import React, { Component } from 'react';
import styled from 'styled-components';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
} from 'react-native';
import {
  Colors,
  StyledView,
  Medium36,
  DemiBold23,
  DemiBold22,
  DemiBold18,
  Medium15,
  Medium14,
  ScrollableContent,
  BlockListItem,
} from './../styles';
import BlockItem from './BlockItem'

const Heading = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-color: #ebebeb;
  border-bottom-width: 1;
  padding-bottom: 9;
  margin-bottom: 12px;
`

const FakeDaylists = [
  { key: '1', name: 'Cooking', count: 5, duration: '6hr 33m', color: 'red' },
  { key: '2', name: 'Working', count: 7, duration: '9hr 54m', color: 'orange' },
  { key: '3', name: 'Party', count: 9, duration: '10hr 33m', color: 'blue' },
  { key: '4', name: 'Vacation', count: 14, duration: '12hr 19m', color: 'purple' },
  { key: '5', name: 'Cleaning', count: 3, duration: '5hr 54m', color: 'green' },
]

const BlockItemDaylist = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`

type Props = {};
class Main extends Component<Props> {

  renderDaylist = (daylist) => (
    <BlockItem color={daylist.color}>
      <BlockItemDaylist>
        <DemiBold23 color='white'>{daylist.name}</DemiBold23>
        <View style={{alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Medium36 color='white'>{daylist.count}</Medium36>
            <DemiBold18 color='white'> blocks</DemiBold18>
          </View>
          <Medium14 color='white'>{daylist.duration} total</Medium14>
        </View>
      </BlockItemDaylist>
    </BlockItem>
  )

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StyledView padded>
          <Heading>
            <DemiBold22>Your Daylists</DemiBold22>
            <Medium15 action>Add daylist</Medium15>
          </Heading>
          <ScrollableContent
            data={FakeDaylists}
            renderItem={({item}) => this.renderDaylist(item)}
          />
        </StyledView>
      </View>
    );
  }
};

export default Main;