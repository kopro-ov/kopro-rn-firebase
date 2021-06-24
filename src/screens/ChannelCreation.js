import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Button} from 'react-native';
import {logout} from '../utils/firebase';
import UserContext from '../contexts/User';

const Container = styled.View`
  flex: 1;
`;

const ChannelCreation = ({navigation}) => {
  
  const {dispath} = useContext(UserContext);

  const _handleLogoutButtonPress = async () => {
    try {
      await logout();
    } catch (e) {
      console.log('logout', e.message);
    } finally {
      dispath([])
    }
  };

  return (
    <Container>
      <Text style={{fontSize: 24}}>Chaneel Creation</Text>
      <Button title="Channel" onPress={() => navigation.navigate('Channel')} />
      <Button title="logout" onPress={_handleLogoutButtonPress} />
    </Container>
  );
};

export default ChannelCreation;
