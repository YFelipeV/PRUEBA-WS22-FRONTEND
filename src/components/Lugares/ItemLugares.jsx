import React from "react";
import { deleteLugares } from "../../data/Lugares";

function ItemLugares({ datos, onLugarCreated }) {
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
            className="btn btn-sm btn-outline-danger"
            onClick={async () => {
              const eliminar = await deleteLugares(datos.id)
              if (eliminar) {
                onLugarCreated()
              }


            }


            }
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemLugares;
