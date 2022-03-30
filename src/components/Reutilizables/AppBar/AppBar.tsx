import React from 'react';
import ButtonCarrito from '../ButtonCarrito/ButtonCarrito';
import SearchBar from '../SearchBar/SearchBar';
import ButtonBurger from '../ButtonBurguer/ButtonBurger';
import styled from 'styled-components';

const AppBar = () => {
  return (
    <MainContainer>
      <Space>
        <ButtonBurger />
      </Space>
      <Space>
        <SearchBar />
      </Space>
      <Space>
        <ButtonCarrito />
      </Space>
    </MainContainer>
  );
};

export default AppBar;

export const MainContainer = styled.div`
  height: 10vw;
  display: flex;
  justify-content: space-between;
`;

export const Space = styled.div``;