import {useContext} from 'react'
import { NavLink, Link } from "react-router-dom";
import {img} from '../assets/imagenes.js'
import AuthApi from '../utils/AuthAPI'

import "../fondoinicio.css";

export default function Navbar() {
  const authApi = useContext(AuthApi);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
          <img src={img.logo} className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link focus" aria-current="page" to={"http://localhost:3000/"}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"http://localhost:3000/acerca"}>
                  Acerca de
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={"http://localhost:3000/contacto"}>
                  Contacto
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link " to={"http://localhost:3000/tienda"}>
                  Tienda
                </NavLink>
              </li> 
              {!authApi.auth ? <li className="nav-item">
                <NavLink className="nav-link " to={"http://localhost:3000/login"}>
                  Login
                </NavLink>
              </li> : null}
              {!authApi.auth ?<li className="nav-item">
                <NavLink className="nav-link " to={"http://localhost:3000/register"}>
                  Registro
                </NavLink>
              </li>: null}
              {authApi.auth ? <li className="nav-item">
                <NavLink className="nav-link " to={"http://localhost:3000/dashboard"}>
                  Dashboard
                </NavLink>
              </li> : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
