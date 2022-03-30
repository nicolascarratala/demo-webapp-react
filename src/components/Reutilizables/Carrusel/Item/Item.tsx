import React from 'react';
import styled from 'styled-components';
import {screens} from '../../../../utils/constants'

interface ItemProps {
  objeto: ObjetoProps;
}

interface ObjetoProps {
  name: string;
  imagen: string;
  precio: string;
  envioGratis: boolean;
  unidad: string;
}

const Item = ({ objeto }: ItemProps) => {
  return (
    <CarruselContainer>
      <SImage src={objeto.imagen} />
      <STextos>
        <SPrecio>{objeto.precio}</SPrecio>
        <SUnidad>{objeto.unidad}</SUnidad>
        <SEnvioContainer>
          <SEnvio>{objeto.envioGratis && 'Envio Gratis'}</SEnvio>
        </SEnvioContainer>
      </STextos>
    </CarruselContainer>
  );
};

export default Item;

const CarruselContainer = styled.div`
  z-index: 5;
  background-color: white;
  position: fixed;
  height: 200px;
  width: 300px;
  border-radius: 9px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
 
  @media only screen and (min-width: ${screens.mobile}) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (min-width: ${screens.tablet}) {
    width: 800px;
    height: 600px;
  }

`;

export const SImage = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 9px;
  @media only screen and (min-width: ${screens.mobile}) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (min-width: ${screens.tablet}) {
    width: 800px;
    height: 600px;
  }
`;

export const STitulo = styled.span`
  color: black;
  font-size: 80%;
  font-weight: 100 !important;
  text-align: top;
`;

export const STextos = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const SPrecio = styled.span`
  margin-left: 10px;
`;

export const SUnidad = styled.span`
  margin-left: 5px;
  font-size: 80%;
  font-weight: 100 !important;
`;

export const SEnvio = styled.span`
  text-align: right;
  margin-right: 5px;
  color: green;
  font-size: 100%;
`;

export const SEnvioContainer = styled.div`
  text-align: right;
  width: 100%;
`;
