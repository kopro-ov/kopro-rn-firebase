import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Item from './components/Item';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width-40}px;
`;

 export default function App() {

  const width = Dimensions.get('window').width;

  return (
     <>
      <Container>
        <List width={width}>
          <Item text="Test1" />
          <Item text="Test2" />
          <Item text="Test3" />
          <Item text="Test4" />
          <Item text="Test5" />
        </List>
      </Container>
     </>
  );
 }