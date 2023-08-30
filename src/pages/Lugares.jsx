import React, { useEffect, useState } from "react";
import { getLugares } from "../data/Lugares";
import ItemLugares from "../components/Lugares/ItemLugares";
import { getDepartamento } from "../data/Departementos";
import FormLugares from "../components/Lugares/FormLugares";

function Lugares() {
  const [data, setdata] = useState([]);
  const [depart, setDepart] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getLugares();
      const responseDepartamento = await getDepartamento();
      setdata(response);
      setDepart(responseDepartamento);
    })();
  }, []);
  return (
    <>
      <main
        role="main"
        class="container-fluid col-md-9 ml-sm-auto col-lg-10 px-4"
      >
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Panel de administración</h1>
        </div>

        <h5 class="alert alert-info">Lugares</h5>

        <FormLugares depart={depart} />

        <form class="form-signin">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar un lugar"
          />
        </form>

        <table class="table table-bordered table-sm">
          <thead class="alert-dark">
            <tr>
              <th>Lugar</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Departamento</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos, index) => (
              <ItemLugares key={index} datos={datos} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Lugares;
