import React, { useState } from "react";
import "../assets/css/main.css";
import main from "../assets/img/logo-colombia.png";
import { useNavigate } from "react-router-dom";
import { registrarUser } from "../data/Auth";

function Register() {
  const [data, setdata] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleTarget = ({ target }) => {
    setdata({ ...data, [target.name]: target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    registrarUser(data, navigate);
  };
  return (
    <>
      <form className="form-signin" onSubmit={handleSumbit}>
        <h6 className="alert alert-info">Registro de usuarios</h6>
        <input
          type="text"
          class="form-control"
          placeholder="nombre"
          name="nombre"
          required
          onChange={handleTarget}
          autoFocus
        />
        <input type="email" className="form-control" onChange={handleTarget} name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          onChange={handleTarget}
          className="form-control"
          placeholder="contraseña"
          required
        />
        <button className="btn btn-lg btn-success btn-block" type="submit">
          Registrarse
        </button>
        <img className="mb-4" src={main} />
      </form>
    </>
  );
}

export default Register;
