import React, { useState } from "react";
import { createLugares } from "../../data/Lugares";

function FormLugares({ depart }) {
  const [data, setdata] = useState({
    nombre: "",
    descripcion: "",
    departamento_id: "",
  });
  const [imagen, setimagen] = useState();

  const handleTarget = ({ target }) => {
    setdata({ ...data, [target.name]: target.value });
  };
  const handleOnsumbit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("imagen", imagen);
    formData.append("departamento_id", data.departamento_id);
    createLugares(formData);
  };

  return (
    <form class="form-departamentos" onSubmit={handleOnsumbit}>
      <div class="row">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre del lugar"
          required
          name="nombre"
          autofocus
          onChange={handleTarget}
        />
        <textarea
          cols="40"
          class="form-control"
          rows="5"
          name="descripcion"
          onChange={handleTarget}
          placeholder="Descripción del lugar"
        ></textarea>
        <input
          type="file"
          class="form-control"
          placeholder="seleccionar imagen"
          required
          onChange={(e) => setimagen(e.target.files[0])}
        />
        <select
          class="custom-select d-block w-100"
          id="state"
          required=""
          onChange={handleTarget}
        >
          <option value="">Departamento</option>

          {depart.map((item, index) => (
            <option value={item.id} key={index}>
              {item.nombre}
            </option>
          ))}
        </select>
        <button class="btn btn-info btn-sm" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default FormLugares;
