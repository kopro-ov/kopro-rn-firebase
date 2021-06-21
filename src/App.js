import React, {useState} from 'react';
import {StatusBar, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Navigation from './navigations';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
}
