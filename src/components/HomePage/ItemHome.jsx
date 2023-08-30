import React from "react";
import catedral from "../../assets/img/catedral-manizales.jpg";

function ItemHome({ datos }) {
  console.log(datos);
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          src={`http://127.0.0.1:8000/storage/${datos.imagen}`}
        />
        <div className="card-body">
          <h4 className="card-title">{datos.nombre}</h4>
          <p className="card-text">{datos.descripcion}</p>
          <div className="list-group list-group-flush text-center">
            <span className="list-group-item bg-info">{datos.nombre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemHome;
