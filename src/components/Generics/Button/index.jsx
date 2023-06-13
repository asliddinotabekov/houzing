import React from 'react';
import { Container } from './style';

export const Button = ({ children, type, onClick, w, h }) => {
  return (
    <Container onClick={onClick} type={type} w={w} h={h}>
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;