import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Channel from '../screens/Channel';
import ChannelCreation from '../screens/ChannelCreation';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        cardStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Channel Creation" component={ChannelCreation} />
      <Stack.Screen name="Channel" component={Channel} />
    </Stack.Navigator>
  );
};

export default MainStack;
