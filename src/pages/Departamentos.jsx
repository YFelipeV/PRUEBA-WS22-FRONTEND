import React, { useEffect, useState } from "react";
import { createDepratamento, getDepartamento } from "../data/Departementos";
import ItemDepartamentos from "../components/Departamentos/ItemDepartamentos";

function Departamentos() {
  const [departamento, setDepartamento] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getDepartamento();
      setdata(response);
    })();
  }, []);

  const handleOnsumbit = (e) => {
    e.preventDefault();
    createDepratamento(departamento);
  };

  return (
    <>
      <main
        role="main"
        class="container-fluid col-md-9 ml-sm-auto col-lg-10 px-4"
      >
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Panel de administración</h1>
        </div>

        <h5 class="alert alert-info">Departamentos</h5>

        <form class="form-departamentos" onSubmit={handleOnsumbit}>
          <input
            type="text"
            class="form-control"
            placeholder="crear un nuevo departamento"
            required
            onChange={(e) => setDepartamento(e.target.value)}
            autofocus
          />
          <button class="btn btn-info btn-sm" type="submit">
            Guardar
          </button>
        </form>

        <form class="form-signin">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar un departamento"
          />
        </form>

        <div class="table-responsive">
          <table class="table table-bordered table-sm">
            <thead class="alert-dark">
              <tr>
                <th>ID</th>
                <th>Departamento</th>
                <th class="text-center">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <ItemDepartamentos key={index} data={data} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Departamentos;
