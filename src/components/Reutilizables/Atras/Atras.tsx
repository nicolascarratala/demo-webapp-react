import React from 'react';
import AtrasSvg from '../../svg/AtrasSvg';

 import styled from 'styled-components';
 import { useNavigate } from 'react-router-dom';

const Atras = () => {

  let navigate = useNavigate();

  return (
    <AtrasButton onClick={() => {navigate("/")}}>
      <AtrasSvg></AtrasSvg>
    </AtrasButton>
  );
};

export default Atras;

const AtrasButton = styled.button`
  border: none;
  background-color: transparent;
  position:left;
  margin-top:15px;
  margin-left:10px;
  position: relative;
  left:-180px;
`;