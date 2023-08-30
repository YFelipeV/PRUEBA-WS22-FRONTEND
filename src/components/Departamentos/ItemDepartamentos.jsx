import React from "react";

function ItemDepartamentos({data}) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.departamento}</td>
      <td className="text-center">
        <button type="button" className="btn btn-sm btn-outline-info">
          Actualizar
        </button>
      </td>
    </tr>
  );
}

export default ItemDepartamentos;
