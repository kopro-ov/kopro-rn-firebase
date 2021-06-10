import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Image from '../components/Image';
import Input from '../components/Input';
import { images } from '../utils/images';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(images.logo);
    
    return (
        <Container>
            <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
            <Input
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() =>{}}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() =>{}}
                placeholder="Password"
                returnKeyType="done"
            />        
        </Container>
    );
};

export default Login;