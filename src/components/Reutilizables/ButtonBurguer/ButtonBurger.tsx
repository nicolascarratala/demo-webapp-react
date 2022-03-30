import React from 'react';
import styled from 'styled-components';
import BurgerMenuSvg from '../../svg/BurgerMenuSvg';

const ButtonBurger = () => {
  return (
    <SButtonBurger>
      <SImageBurguer />
    </SButtonBurger>
  );
};

export default ButtonBurger;


//Button

export const SButtonBurger = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
`;

//Images

export const SImageBurguer = styled(BurgerMenuSvg)``;
