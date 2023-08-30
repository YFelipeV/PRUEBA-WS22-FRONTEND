import React from "react";
import main from "../assets/img/main-logo.png";
import "../assets/css/dashboard.css";
import { cerrarSesion } from "../data/Auth";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          <img src={main} />
        </a>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a
              role="button"
              onClick={() => cerrarSesion(navigate)}
              class="nav-link"
            >
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to={"/dashboard"} class="nav-link active" href="#">
                    Panel de administración
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/dashboard/usuarios"} class="nav-link" href="#">
                    Usuarios
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/dashboard/departamentos"}
                    class="nav-link"
                    href="#"
                  >
                    Departamentos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/dashboard/lugares"} class="nav-link" href="#">
                    Lugares
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Panel de administración</h1>
            </div>

            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
