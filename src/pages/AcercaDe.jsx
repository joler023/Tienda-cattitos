import React from "react";
import { img } from "../assets/imagenes.js";
import "../fondoinicio.css";

export default function AcercaDe() {
  return (
    <>
      <div className="bg-light mx-5 nav-margin">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-2">
            <div className="col-lg-6">
              <h1 className="display-4 boogaloo">Sobre Nosotros</h1>
              <p className="lead text-muted mb-0">
                Cattitos es una tienda online de artículos para mascotas que
                ofrece una amplia gama de productos de alta calidad para todos
                tus amigos peludos. Creemos que las mascotas son algo más que
                animales: son parte de la familia y se merecen lo mejor. Por eso
                ofrecemos sólo los mejores productos, incluyendo comida,
                juguetes, accesorios y mucho más, todo a precios competitivos.
              </p>
              <br />
              <p className="lead text-muted mb-0">
                Entendemos que las mascotas son únicas y tienen necesidades
                diferentes, por lo que contamos con un equipo de expertos a su
                disposición para asesorarle y ayudarle a encontrar los productos
                perfectos para su mascota. Nuestro sitio web es fácil de usar y
                navegar, por lo que te resultará sencillo encontrar exactamente
                lo que buscas.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="conejo-container">
                <img src={img.conejo} alt="" className="img-fluid conejo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 mx-5">
        <div className="container py-3">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light boogaloo">
                Nos apasiona la sostenibilidad
              </h2>
              <p className="font-italic text-muted mb-4">
                Por eso disponemos de una gama de productos ecológicos. Tanto si
                buscas comida respetuosa con el medio ambiente, juguetes
                fabricados con materiales reciclados o accesorios que reduzcan
                los residuos, tenemos todo lo que necesitas para que tu mascota
                esté feliz y sana al tiempo que proteges el planeta.
              </p>
              <p className="font-italic text-muted mb-4">
                En Cattitos, creemos que cada pequeña acción marca la
                diferencia, y nos comprometemos a predicar con el ejemplo.
                Buscamos constantemente formas de mejorar nuestro impacto
                medioambiental y de promover la sostenibilidad en el sector de
                los animales de compañía. Nuestro objetivo es proporcionar a los
                propietarios de mascotas las herramientas que necesitan para
                tener un impacto positivo en el medio ambiente y, al mismo
                tiempo, ofrecer a sus mascotas los mejores productos y servicios
                posibles.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 mx-auto foto-perro">
              <div className="perro-container">
                <img
                  src={img.perro2}
                  alt=""
                  className="img-fluid mb-lg-0 perro"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto perro-container2">
              <img
                src={img.perro}
                alt=""
                className="img-fluid mb-lg-0 perro2"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light boogaloo">
                Tus mascotas se merecen lo mejor
              </h2>
              <p className="font-italic text-muted mb-4">
              En Cattitos, creemos que cada mascota se merece lo mejor, y nos comprometemos a ofrecer un servicio de primera y productos de calidad a cada cliente. Tanto si es la primera vez que compra como si es un cliente fiel, estamos aquí para ayudarle en todo momento.
              </p><br />
              <p className="font-italic text-muted mb-4">
              ¿Por qué esperar? Visite Cattitos hoy mismo y compruebe por qué somos la tienda online de artículos para mascotas preferida por los dueños de mascotas de todo el mundo.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-2 mx-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light boogaloo">Nuestro equipo</h2>
              <p className="font-italic text-muted">
                Los fundadores de esta empresa a tu servicio
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Santiago Cadenas</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Sebastian Arenales</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Andres Hincapie</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
