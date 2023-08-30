import React from "react";

function ItemLugares({ datos }) {
  return (
    <>
      <tr>
        <td>{datos.nombre}</td>
        <td>{datos.descripcion}</td>
        <td>
          <img src={`http://127.0.0.1:8000/storage/${datos.imagen}`} alt="" />
        </td>
        <td>Risaralda</td>
        <td>
          <button type="button" class="btn btn-sm btn-outline-danger">
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemLugares;
