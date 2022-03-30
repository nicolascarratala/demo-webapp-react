import React from 'react';
import LupitaSvg from '../../svg/LupitaSvg';
import styled from 'styled-components';
import BurgerMenuSvg from '../../svg/BurgerMenuSvg';


const SearchBar = () => {
  return (
    <MainContainer>
      <LupitaSvg />
      <input
        className="searchInput"
        placeholder="Buscar ..."
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </MainContainer>
  );
};

export default SearchBar;
export const MainContainer = styled.div`
  background-color: rgba(10, 10, 10, 0.1);
  width: 70vw;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .searchInput {
    background-color: transparent;
    border: none;
    width: 80%;
    margin: 5px;
  }
`;

//Button


export const SButtonBurger = styled.button`
  background-color: gray;
`;

//Images


export const SImageBurguer = styled(BurgerMenuSvg)``;
