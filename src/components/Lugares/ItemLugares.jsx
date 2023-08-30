import React from "react";
import { deleteLugares } from "../../data/Lugares";

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
          <button
            type="button"
            class="btn btn-sm btn-outline-danger"
            onClick={() => deleteLugares(datos.id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemLugares;
