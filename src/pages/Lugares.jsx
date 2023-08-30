import React, { useEffect, useState } from "react";
import { buscarLugares, getLugares } from "../data/Lugares";
import ItemLugares from "../components/Lugares/ItemLugares";
import { getDepartamento } from "../data/Departementos";
import FormLugares from "../components/Lugares/FormLugares";
import Buscador from "../components/Lugares/Buscador";

function Lugares() {
  const [data, setData] = useState([]);
  const [depart, setDepart] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');

  useEffect(() => {
    (async () => {
      const response = await getLugares();
      const responseDepartamento = await getDepartamento();
      setData(response);
      setDepart(responseDepartamento);
    })();
  }, []);

  const handleOnsubmit = async (e) => {
    e.preventDefault();

    if (id === '') {
      const response = await getLugares();
      setData(response);
      setError(null);
    } else {
      const response = await buscarLugares(id);

      if (response.id) {
        const arreglo = [response];
        setData(arreglo);
        setError(null);
      } else {
        setError(response);
        setData([]);
      }
    }
  };
  const actualizarLugares = async () => {
    const response = await getLugares(); // Obtener la lista actualizada de lugares
    setData(response);
  };


  return (
    <>
      <main
        role="main"
        className="container-fluid col-md-9 ml-sm-auto col-lg-10 px-4"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Panel de administración</h1>
        </div>

        <h5 className="alert alert-info">Lugares</h5>

        <FormLugares depart={depart} onLugarCreated={actualizarLugares} />

        {/* <Buscador />*/}
        <form className="form-signin" onSubmit={handleOnsubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar un lugar"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </form>

        <table className="table table-bordered table-sm">
          <thead className="alert-dark">
            <tr>
              <th>Lugar</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Departamento</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {error ? <p className="text-center">{error.mensaje}</p> : data.map((datos, index) => (
              <ItemLugares key={index} datos={datos}  onLugarCreated={actualizarLugares} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Lugares;
