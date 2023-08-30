import React from "react";
import main from "../assets/img/main-logo.png";
import "../assets/css/dashboard.css";
import { cerrarSesion } from "../data/Auth";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to={'/dashboard'} className="navbar-brand col-sm-3 col-md-2 mr-0" >
          <img src={main} />
        </Link>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a
              role="button"
              onClick={() => cerrarSesion(navigate)}
              className="nav-link"
            >
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link active" href="#">
                    Panel de administración
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dashboard/usuarios"} className="nav-link" href="#">
                    Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/dashboard/departamentos"}
                    className="nav-link"
                    href="#"
                  >
                    Departamentos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dashboard/lugares"} className="nav-link" href="#">
                    Lugares
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Panel de administración</h1>
            </div>

            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
