import React, { useEffect, useState } from "react";
import { buscarDepartamento, createDepratamento, getDepartamento } from "../data/Departementos";
import ItemDepartamentos from "../components/Departamentos/ItemDepartamentos";

function Departamentos() {
  const [departamento, setDepartamento] = useState("");
  const [data, setdata] = useState([]);
  const [error, setError] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    (async () => {
      const response = await getDepartamento();
      setdata(response);
      if (!id) {
        setdata(response)
      }
    })();
  }, [id]);

  const handleOnsumbit = (e) => {
    e.preventDefault();
    createDepratamento(departamento);
  };
  const handleOnsumbitBuscador = async (e) => {
    e.preventDefault();

    if (id === '') {
      const response = await getDepartamento();
      setdata(response);
      setError(null)
    } else {
      const response = await buscarDepartamento(id);
      if (response.id) {
        const arreglo = [response]
        setdata(arreglo)
        setError('')


      } else {
        setError(response)
        setdata([])
      }
    }

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

        <h5 className="alert alert-info">Departamentos</h5>

        <form className="form-departamentos" onSubmit={handleOnsumbit}>
          <input
            type="text"
            className="form-control"
            placeholder="crear un nuevo departamento"
            required
            onChange={(e) => setDepartamento(e.target.value)}
            autoFocus
          />
          <button className="btn btn-info btn-sm" type="submit">
            Guardar
          </button>
        </form>

        <form className="form-signin" onSubmit={handleOnsumbitBuscador}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar un departamento"
            onChange={(e) => setId(e.target.value)}
          />
        </form>

        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="alert-dark">
              <tr>
                <th>ID</th>
                <th>Departamento</th>
                <th className="text-center">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {error ? (<tr className="error"><td  >{error.mensaje}</td></tr>) : data.map((data, index) => (
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
