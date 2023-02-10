import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import AcercaDe from "../pages/AcercaDe";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tienda from "../pages/Tienda";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthAPI from "../utils/AuthAPI";

export default function AppRoutes() {
  return (
    <div>
      {/*navbar*/}
      <Navbar />
      <div>
        {/*elementos*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route
            path="/login"
            element={
              <RouteRegistration>
                <Login />
              </RouteRegistration>
            }
          />
          <Route
            path="/register"
            element={
              <RouteRegistration>
                <Register />
              </RouteRegistration>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RouteProtected>
                <Dashboard />
              </RouteProtected>
            }
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const RouteRegistration = ({ children }) => {
  const authApi = useContext(AuthAPI);
  if (!authApi.auth) {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
const RouteProtected = ({ children }) => {
  const authApi = useContext(AuthAPI);
  if (!authApi.auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
