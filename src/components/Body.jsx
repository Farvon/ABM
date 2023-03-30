import React from 'react';
import styled from 'styled-components';

import Cliente from './Cliente';

function Body() {
  return (
    <Contenedor>
      <Boton>+</Boton>
      <Cliente />
    </Contenedor>
  );
}

export default Body;

const Contenedor = styled.div`
  align-items: center;
  justify-content: center;
  width: 90vw;
`;

const Boton = styled.button`
  margin-top: 20px;
  background-color: green;
`;
