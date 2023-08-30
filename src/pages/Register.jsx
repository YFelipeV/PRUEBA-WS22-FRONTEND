import React from "react";
import "../assets/css/main.css";
import main from "../assets/img/logo-colombia.png";

function Register() {
  return (
    <>
      <form class="form-signin">
        <h6 class="alert alert-info">Registro de usuarios</h6>
        <input
          type="text"
          class="form-control"
          placeholder="nombre"
          required
          autofocus
        />
        <input type="email" class="form-control" placeholder="email" required />
        <input
          type="password"
          class="form-control"
          placeholder="contraseña"
          required
        />
        <button class="btn btn-lg btn-success btn-block" type="submit">
          Registrarse
        </button>
        <img class="mb-4" src={main} />
      </form>
    </>
  );
}

export default Register;
