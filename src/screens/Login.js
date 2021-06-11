import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import Image from '../components/Image';
import Input from '../components/Input';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraHeight={20}
        >
            <Container>
                <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    onSubmitEditing={() => passwordRef.current.foucs()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() =>{}}
                    placeholder="Password"
                    returnKeyType="done"
                />        
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Login;