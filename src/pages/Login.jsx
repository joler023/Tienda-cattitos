import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../fondoinicio.css";
import { signIn } from "../components/auth-api";
import { img } from "../assets/imagenes.js";

import AuthApi from "../utils/AuthAPI";

export default function Register() {
  const authApi = useContext(AuthApi);
  return (
    <div>
      <section className="vh-150 nav-margin">
        <div
          style={{
            background:
              "url(https://img.freepik.com/vector-premium/lindo-patron-transparente-brillante-lapiz-crayon-textura-animal-mascota-pata-colores-pastel_499817-58.jpg?w=740)",
            objectFit: "cover",
            opacity: "1",
          }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-sm-6 col-lg-6 col-xl-4">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-12 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <Formik
                          initialValues={{
                            email: "",
                            password: "",
                          }}
                          validate={(valores) => {
                            const errores = {};
                            if (!valores.email) {
                              errores.email =
                                "Porfavor ingrese un correo electronico";
                            } else if (
                              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                valores.email
                              )
                            ) {
                              errores.email =
                                "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo ";
                            }
                            if (!valores.password) {
                              errores.password =
                                "Porfavor ingrese una contraseña";
                            } else if (
                              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
                                valores.password
                              )
                            ) {
                              errores.password = `la contraseña debe tener de 8 a 25 caracteres con una combinación de letras, números y símbolos`;
                            }
                            return errores;
                          }}
                          onSubmit={async (values) => {
                            const email = values.email;
                            const password = values.password;
                            const res = await signIn({ email, password });
                            if (res.data.auth) {
                              authApi.setAuth(true);
                            }
                          }}
                        >
                          {({ errors }) => (
                            <Form>
                              <div className="d-flex align-items-center mb-3 pb-1">
                                <img
                                  src={img.logo}
                                  style={{ color: "#ff6219" }}
                                  className="logo-login"
                                />
                              </div>

                              <h5
                                className="fw-normal mb-3 pb-3 boogaloo"
                                style={{
                                  letterSpacing: "1px",
                                  fontSize: "30px",
                                }}
                              >
                                Login
                              </h5>
                              <div className="wrap-input1 validate-input form-outline mb-4">
                                <Field
                                  className="input1"
                                  placeholder="Email"
                                  name="email"
                                  id="email"
                                  type="email"
                                  required
                                />
                                <ErrorMessage
                                  name="email"
                                  component={() => (
                                    <div className="warning">
                                      {errors.email}
                                    </div>
                                  )}
                                />
                              </div>
                              <div className="wrap-input1 validate-input form-outline mb-4">
                                <Field
                                  placeholder="Contraseña"
                                  className="input1"
                                  name="password"
                                  id="password"
                                  type="password"
                                  required
                                />
                                <span className="shadow-input1"></span>
                                <ErrorMessage
                                  name="password"
                                  component={() => (
                                    <div className="warning">
                                      {errors.password}
                                    </div>
                                  )}
                                />
                              </div>
                              <div className="pt-1 mb-4">
                                <button
                                  className="btn btn-pink btn-lg btn-block button"
                                  type="submit"
                                >
                                  Login
                                </button>
                              </div>

                              <p
                                className="mb-5 pb-lg-2"
                                style={{ color: "#393f81" }}
                              >
                                ¿Ya tienes cuenta?{" "}
                                <a href="/login" style={{ color: "#393f81" }}>
                                  Entre aquí
                                </a>
                              </p>
                              <a href="#!" className="small text-muted">
                                Terms of use Privacy policy
                              </a>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
