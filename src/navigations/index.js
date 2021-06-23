import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import Spinner from '../components/Spinner';
import {ProgressContext} from '../contexts/Progress';
import {UserContext} from '../contexts/User';

const Navigation = () => {
  const {inProgress} = useContext(ProgressContext);
  const {user} = useContext(UserContext);

  return (
    <NavigationContainer>
      {user?.uid && user?.email ? <MainStack /> : <AuthStack />}
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
