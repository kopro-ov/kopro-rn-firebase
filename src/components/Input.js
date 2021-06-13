import React, { useState, forwardRef } from 'react';
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
const StyledTextInput = styled.TextInput`
    margin: 10px;
    padding: 20px 10px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
`;
const Input = forwardRef((    
    {
        label,
        value,
        onChangeText,
        onSubmitEditing,
        onBlur,
        placheolder,
        isPassword,
        returnKeyType,
        maxLength
    },
    ref
) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            <Label isFocused={isFocused}>{label}</Label>
            <StyledTextInput
                ref={ref}
                isFocused={isFocused}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                onFoucs={()=> setIsFocused(true)}
                onBlur={()=>{
                    setIsFocused(false);
                    onBlur();
                }}
                placeholder={placheolder}
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
});

Input.defaultProps = {
    onBlur: () => {},
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number,
}

export default Input;