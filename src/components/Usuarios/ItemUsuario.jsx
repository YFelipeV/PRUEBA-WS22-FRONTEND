import React from "react";

function ItemUsuario({ datos }) {
   
  return (
    <>
      <tr>
        <td>{datos.nombre}</td>
        <td>{datos.email}</td>
        <td>{datos.api_token}</td>
        <td>{datos.rol}</td>
      </tr>
    </>
  );
}

export default ItemUsuario;
