import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
`;
const Label = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
`;
const StyledTextInput = styled.TextInput.attrs({
    placeholderTextColor: 'red'
})`
    background-color: '#000';
    color: 'blue';
    padding: 20px 10px;
    font-size: 16px;
    border: 1px solid yellow;
    border-radius: 4px;
`;
const Input = ({
    label,
    value,
    onChnageText,
    onSubmitEditing,
    onBlur,
    placheolder,
    isPassword,
    returnKeyType,
    maxLength
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            <Label isFocused={isFocused}>{label}</Label>
            <StyledTextInput
                isFocused={isFocused}
                value={value}
                onChnageText={onChnageText}
                onSubmitEditing={onSubmitEditing}
                onFoucs={()=> setIsFocused(true)}
                onBlur={()=>{
                    setIsFocused(false);
                    onBlur();
                }}
                placheolder={placheolder}
                secureTextEntry={isPassword}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="none" //ios
                underlineColorAndroid="transparent" //android 
            />
        </Container>
    );
};

Input.defaultProps = {
    onBlur: () => {},
}

Input.prototype = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChnageText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    placheolder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number
}

export default Input;