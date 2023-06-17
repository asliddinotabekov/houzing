import React from 'react';
import { Container } from './style';

export const Button = ({ children, type, onClick, w, h ,cl}) => {
  return (
    <Container onClick={onClick} className={cl} type={type} w={w} h={h}>
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;