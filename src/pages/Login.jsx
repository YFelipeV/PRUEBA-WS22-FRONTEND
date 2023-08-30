import React, { useState } from "react";
import "../assets/css/main.css";
import main from "../assets/img/logo-colombia.png";
import { authUser } from "../data/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate()

  const handleTarget = ({ target }) => {
    setdata({ ...data, [target.name]: target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    authUser(data,navigate);
  };
  console.log(data);
  return (
    <>
      <form class="form-signin" onSubmit={handleSumbit}>
        <h6 class="alert alert-info">Inicio de sesión</h6>
        <input
          type="email"
          class="form-control"
          placeholder="email"
          required
          name="email"
          onChange={handleTarget}
          autofocus
        />
        <input
          type="password"
          class="form-control"
          placeholder="contraseña"
          name="password"
          onChange={handleTarget}
          required
        />
        <button class="btn btn-lg btn-info btn-block" type="submit">
          Ingresar
        </button>
        <img class="mb-4" src={main} />
      </form>
    </>
  );
}

export default Login;
