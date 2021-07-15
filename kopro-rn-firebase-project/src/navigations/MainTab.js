import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Channel from '../screens/Channel';
import ChannelCreation from '../screens/ChannelCreation';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Channel" component={Channel} />
      <Tab.Screen name="ChannelCreation" component={ChannelCreation} />
    </Tab.Navigator>
  );
};

export default MainTab;
