import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Signup = () => {
    return(
        <Container>
            <Text style={{ fontSize: 30}}>Signup Screen</Text>
        </Container>
    );
}