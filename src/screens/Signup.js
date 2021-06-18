import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { Image } from '../components/Image';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import validateEmail from '../utils/common'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
`;


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState(true)

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  useEffect(() => {
    let _errorMessage = '';
    if (!name) {
      _errorMessage = 'Plesage enter your name';
    } else if (!validateEmail(email)) {
      _errorMessage = 'Plesage verify your email';
    } else if (password.length < 6) {
      _errorMessage = 'Passwords need to match';
    }
    
    setErrorMessage(_errorMessage)

  }, [name, email, password, passwordConfirm, errorMessage]);


  useEffect(() => {
    setDisabled(
      !(name && email &&, password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]); 

  return (
    <Container>
      
    </Container>
  );
};

export default Signup;
