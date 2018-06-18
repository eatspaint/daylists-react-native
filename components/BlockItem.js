import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Colors,
  StyledView,
  DemiBold22,
  Medium15,
  ScrollableContent,
  BlockListItem,
} from './../styles';

const BlockItem = (props) => (
  <BlockListItem color={props.color ? props.color : null}>
    {props.children}
  </BlockListItem>
)

export default BlockItem;