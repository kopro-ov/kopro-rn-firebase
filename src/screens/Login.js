import React from 'react';
import styled from 'styled-components/native';
import { images } from '../utils/images';
import { Text, Button, Image } from 'react-native';
import { Input } from '../components/Input';
import { useState } from 'react/cjs/react.development';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Image 
                style={{width:'100%', height:'20%'}}
                source={{uri: images.logo}} 
            />
            {/* <Input
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
                onChangeText={text => setP(text)}
                onSubmitEditing={() =>{}}
                placeholder="Password"
                returnKeyType="next"
            />         */}
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </Container>
    );
};

export default Login;