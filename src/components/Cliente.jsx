import React from 'react';
import styled from 'styled-components';

function Cliente(name, adress, email, phone, status) {
  return (
    <Contenedor>
      <Tabla>
        <tr>
          <th>Nombre</th>
        </tr>

        <tr>
          <td>Direccion</td>
          <td>Correo</td>
          <td>Telefono</td>
          <td>Status</td>
          <td>Acciones</td>
        </tr>
        <tr>
          <td>asdasd</td>
          <td>adasdasddd</td>
          <td>213123</td>
          <td>asdasd</td>
          <td>
            <button>edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </Tabla>
    </Contenedor>
  );
}

export default Cliente;

const Contenedor = styled.div`
  display: flex;
  min-width: 90vw;
`;

const Tabla = styled.table`
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 100%;
`;
