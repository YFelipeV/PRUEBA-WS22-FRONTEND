import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Departamentos from "../pages/Departamentos";
import Lugares from "../pages/Lugares";
import Usuarios from "../pages/Usuarios";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="departamentos" element={<Departamentos />} />
        <Route path="lugares" element={<Lugares />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
