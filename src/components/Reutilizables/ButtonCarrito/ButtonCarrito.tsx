import React from 'react';
import CarritoSvg from '../../svg/CarritoSvg';
import styled from 'styled-components';

const ButtonCarrito = () => {
  return (
    <SButtonCarrito>
      <SImageCarrito />
    </SButtonCarrito>
  );
};

export default ButtonCarrito;

export const SImageCarrito = styled(CarritoSvg)``;


export const SButtonCarrito = styled.button`
  background-color: rgba(10, 10, 10, 0.1);
  border-radius: 30px;
  height: 40px;
  width: 40px;
  border: none;
`;