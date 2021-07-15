import React, {useState, useRef, useEffect, useContext} from 'react';
import {UserContext} from '../contexts/User';
import {ProgressContext} from '../contexts/Progress';
import styled from 'styled-components/native';
import Image from '../components/Image';
import Input from '../components/Input';
import Button from '../components/Button';
import {login} from '../utils/firebase';
import {images} from '../utils/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validateEmail, removeWhitespace} from '../utils/common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Alert} from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  padding-top: ${({insets: {top}}) => top}px;
  padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
`;

const Login = ({navigation}) => {
  const {dispatch} = useContext(UserContext);
  const {spinner} = useContext(ProgressContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const passwordRef = useRef();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  // console.log(passwordRef);
  // console.log('??');
  const _handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email',
    );
  };
  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };
  const _handleLoginButtonPress = async () => {
    try {
      spinner.start();
      const user = await login({email, password});
      dispatch(user);
    } catch (e) {
      Alert.alert('Login Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      extraScrollHeight={20}>
      <Container insets={insets}>
        <Image url={images.logo} imageStyle={{borderRadius: 8}} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.foucs()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Login"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />
        <Button
          title="Sign up with email"
          onPress={() => navigation.navigate('Signup')}
          isFiled={false}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
