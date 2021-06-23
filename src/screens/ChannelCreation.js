import React from 'react';
import styled from 'styled-components/native';
import {Text, Button} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const ChannelCreation = ({navigation}) => {
  console.log(navigation);
  return (
    <Container>
      <Text style={{fontSize: 24}}>Chaneel Creation</Text>
      <Button title="Channel" onPress={() => navigation.navigate('Channel')} />
    </Container>
  );
};

export default ChannelCreation;
