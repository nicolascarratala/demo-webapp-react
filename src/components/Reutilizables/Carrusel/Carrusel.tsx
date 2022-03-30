import { useState } from 'react';
import Item from './Item/Item';
import React from 'react';
import styled from 'styled-components';
import FlechaDerechaCarruselSvg from '../../svg/FlechaDerechaCarruselSvg';
import FlechaIzquierdaCarruselSvg from '../../svg/FlechaIzquierdaCarruselSvg';
import {Link}  from 'react-router-dom';
import { screens } from '../../../utils/constants';

const leftArrow = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  element: number,
  setElement: { (value: React.SetStateAction<number>): void; (arg0: number): void }
) => {
  e.preventDefault();
  if (element === 0) {
    setElement(2);
  } else {
    setElement(element - 1);
  }
};

const rightArrow = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  element: number,
  setElement: { (value: React.SetStateAction<number>): void; (arg0: number): void }
) => {
  e.preventDefault();
  if (element === 2) {
    setElement(0);
  } else {
    setElement(element + 1);
  }
};

const Carrusel = (objeto: any) => {
  const [element, setElement] = useState(0);

  return (
    <MainContainer>
      <SContainerCarrusel>
        <SContainerHead>
          <STitulo>{objeto.objeto[element].name}</STitulo>
          <SLink to={objeto.objeto[element].verTodo}> Ver todo </SLink>
        </SContainerHead>

        <SContainerBody>
          <SButtonFlechaCarrusel
            onClick={(e) => {
              leftArrow(e, element, setElement);
            }}
          >
            <SImageFlechaIzquierdaCarrusel />
          </SButtonFlechaCarrusel>

          <SCard>
            <Item objeto={objeto.objeto[element]} />
          </SCard>

          <SButtonFlechaCarrusel
            onClick={(e) => {
              rightArrow(e, element, setElement);
            }}
          >
            <SImageFlechaDerechaCarrusel />
          </SButtonFlechaCarrusel>
        </SContainerBody>
      </SContainerCarrusel>
    </MainContainer>
  );
};

export default Carrusel;


//Carrusel

export const cardHight = 250;
export const cardWidth = 30;

export const STitulo = styled.span`
  color: black;
  font-size: 20px;
  text-align: left;
  margin-left: 50px;
  font-weight: 600;
`;

export const SLink = styled(Link)`
  margin-left: 20px;
`;

export const SContainerHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

export const SCard = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: solid 0.5px #bcbcbc;
  box-shadow: 1px 5px 4px #bcbcbc;
  @media only screen and (min-width: ${screens.mobile}) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (min-width: ${screens.tablet}) {
    width: 800px;
    height: 600px;
  }
`;
export const SImageFlechaDerechaCarrusel = styled(FlechaDerechaCarruselSvg)``;

export const SButtonFlechaCarrusel = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
`;

export const SImageFlechaIzquierdaCarrusel = styled(FlechaIzquierdaCarruselSvg)``;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const SContainerCarrusel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;
