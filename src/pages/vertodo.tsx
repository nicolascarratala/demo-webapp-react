import AppBar from '../components/Reutilizables/AppBar/AppBar';
import Carrusel from '../components/Reutilizables/Carrusel/Carrusel';
import styled from 'styled-components';
import { useState } from 'react';


const VerTodo = () => {


  return (
    <div>
      <AppBar />
      <Body>
        Ver Todo
      </Body>
    </div>
  );
};

export default VerTodo;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
