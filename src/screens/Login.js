import React from 'react';
import styled from 'styled-components/native';
import { images } from '../utils/images';
import { Text, Button, Image } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Login = ({ navigation }) => {
    
    return (
        <Container>
            <Image url={images.logo} />
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </Container>
    );
};

export default Login;