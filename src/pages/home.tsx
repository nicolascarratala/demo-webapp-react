import AppBar from '../components/Reutilizables/AppBar/AppBar';
import Carrusel from '../components/Reutilizables/Carrusel/Carrusel';
import styled from 'styled-components';
import { useState } from 'react';


const Home = () => {

  const [objetoJson, setObjetoJson] = useState(
    JSON.stringify([
      {
        name: 'ejemploA',
        imagen: 'https://media.istockphoto.com/photos/closeup-nature-view-of-green-leaf-background-picture-id1208290498?k=20&m=1208290498&s=612x612&w=0&h=iOgX0Ycplsasv_aHAY4wWVfncP5AZK0Zs-Lr5mQxdTQ=',
        precio: '$1999900',
        envioGratis: false,
        unidad: '/unidad',
        verTodo: '/verTodo'
      },
      {
        name: 'ejemploB',
        imagen: 'https://media.istockphoto.com/photos/young-woman-practicing-breathing-yoga-pranayama-outdoors-in-moss-on-picture-id1171968887?k=20&m=1171968887&s=612x612&w=0&h=BdfHsTAipjx9Z1WEwPDQa2UBAq3C9MG98vF8NwNsYFs=',
        precio: 'Descripción',
        envioGratis: false,
        unidad: '',
        verTodo: '/verTodo'
      },
      {
        name: 'ejemploC',
        imagen:
          'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
        precio: '$300',
        envioGratis: true,
        unidad: '/unidad',
        verTodo: '/verTodo'
      }
    ])
  );

  return (
    <div>
      <AppBar />
      <Body>
        <Carrusel objeto={JSON.parse(objetoJson)} />
      </Body>
    </div>
  );
};

export default Home;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
