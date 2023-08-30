import React from "react";

function ItemDepartamentos({data}) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.nombre}</td>
      <td class="text-center">
        <button type="button" class="btn btn-sm btn-outline-info">
          Actualizar
        </button>
      </td>
    </tr>
  );
}

export default ItemDepartamentos;
