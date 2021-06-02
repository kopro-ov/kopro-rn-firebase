import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';


const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-raduis: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
`;

const Task = ({ text }) => {
    return (
        <Container>
            <Contents>{text}</Contents>
        </Container>
    );
};