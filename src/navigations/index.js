import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import Spinner from '../components/Spinner';
import {ProgressContext} from '../contexts/Progress';

const Navigation = () => {
  const {inProgress} = useContext(ProgressContext);

  return (
    <NavigationContainer>
      <AuthStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
