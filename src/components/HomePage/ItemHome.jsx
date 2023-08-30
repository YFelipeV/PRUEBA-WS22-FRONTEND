import React from "react";
import catedral from "../../assets/img/catedral-manizales.jpg";

function ItemHome({ datos }) {
  console.log(datos);
  return (
    <div class="col-md-4">
      <div class="card mb-4 box-shadow">
        <img
          class="card-img-top"
          src={`http://127.0.0.1:8000/storage/${datos.imagen}`}
        />
        <div class="card-body">
          <h4 class="card-title">{datos.nombre}</h4>
          <p class="card-text">{datos.descripcion}</p>
          <div class="list-group list-group-flush text-center">
            <span class="list-group-item bg-info">{datos.nombre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemHome;
