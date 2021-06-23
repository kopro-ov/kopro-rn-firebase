import React from 'react';
import styled from 'styled-components/native';
import {Text, Button} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const Channel = () => {
  return (
    <Container>
      <Text style={{fontSize: 24}}>Channel</Text>
    </Container>
  );
};

export default Channel;
