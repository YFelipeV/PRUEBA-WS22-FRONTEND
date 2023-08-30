import React, { useEffect, useState } from "react";
import { getUsuarios } from "../data/Usuarios";
import ItemUsuario from "../components/Usuarios/ItemUsuario";

function Usuarios() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getUsuarios();
      setdata(response);
    })();
  }, []);
 
  return (
    <>
      <main
        role="main"
        className="container-fluid col-md-9 ml-sm-auto col-lg-10 px-4"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Panel de administración</h1>
        </div>

        <h5 className="alert alert-info">Usuarios registrados</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="alert-dark">
              <tr>
                <th>Nombre</th>
                <th>email</th>
                <th>Token</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datos, index) => (
                <ItemUsuario key={index} datos={datos} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Usuarios;
