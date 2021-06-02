import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Item from './src/components/Task';

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function() {
  const width = Dimensions.get('window').width;

  return (
    <Container>
      <List width={width}>
        <Task text="Test" />
      </List>
    </Container>
  );

}