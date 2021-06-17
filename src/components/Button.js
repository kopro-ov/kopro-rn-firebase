import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
  background-color: ${({isFiled}) => (isFiled ? 'blue' : TRANSPARENT)};
  align-items: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({isFiled}) => (isFiled ? 'white' : 'blue')};
`;

const Button = ({containerStyle, title, onPress, isFiled, disabled}) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isFiled={isFiled}
      disabled={disabled}>
      <Title isFiled={isFiled}>{title}</Title>
    </Container>
  );
};

Button.defaultProps = {
  isFiled: true,
};

Button.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isFiled: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
