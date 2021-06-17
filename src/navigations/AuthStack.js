import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        cardStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
