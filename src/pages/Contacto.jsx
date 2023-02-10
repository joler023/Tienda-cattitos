import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs, { send } from "@emailjs/browser";
import "../contacto.css";

import { img } from "../assets/imagenes.js";
import { inputAdornmentClasses } from "@mui/material";

export default function Contacto() {
  const sendForm = (data) => {
    emailjs
      .sendForm(
        "service_bgkky1j",
        "template_f8jts96",
        data,
        "TUKDGztQhG4wtHJsz"
      )
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  };
  return (
    <>
      {/* FORMIK */}
      <div
        className="contact1 nav-margin"
        style={{
          background:
            "url(https://static.vecteezy.com/system/resources/previews/002/705/240/non_2x/background-of-dog-paw-prints-vector.jpg)",
          objectFit: "cover",
        }}
      >
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src={img.contacto} className="imagen-contacto" alt="IMG" />
          </div>
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              subject: "",
              mensaje: "",
            }}
            validate={(valores) => {
              const errores = {};
              if (!valores.nombre) {
                errores.nombre = "Porfavor ingrese un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras y espacios ";
              }

              if (!valores.correo) {
                errores.correo = "Porfavor ingrese un correo electronico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo ";
              }
              if (!valores.subject) {
                errores.subject = "Porfavor ingrese un asunto";
              } else if (!/^[\s\S]{0,50}$/.test(valores.subject)) {
                errores.subject =
                  "El asunto solo puede tener maximo 50 caracteres ";
              }

              if (!valores.mensaje) {
                errores.mensaje = "Porfavor ingrese un mensaje";
              } else if (!/^[\s\S]{0,400}$/.test(valores.mensaje)) {
                errores.mensaje =
                  "El mensaje solo puede tener maximo 400 caracteres ";
              }
              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              const data = {
                name: valores.nombre,
                email: valores.correo,
                subject: valores.subject,
                message: valores.mensaje,
              };
              sendForm(data)

              resetForm();
              // console.log(valores);
            }}
          >
            {({ errors, handleSubmit, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                className="contact1-form validate-form"
              >
                <span className="contact1-form-title">Get in touch</span>

                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Name"
                  />
                  <span className="shadow-input1"></span>
                  <ErrorMessage
                    name="nombre"
                    component={() => <div>{errors.nombre}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Email"
                  />
                  <span className="shadow-input1"></span>
                  <ErrorMessage
                    name="correo"
                    component={() => <div>{errors.correo}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <span className="shadow-input1"></span>
                  <ErrorMessage
                    name="subject"
                    component={() => <div>{errors.subject}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    name="mensaje"
                    as="textarea"
                    id="mensaje"
                    rows="5"
                    cols="30"
                    placeholder="Message"
                  ></Field>
                  <span className="shadow-input1"></span>
                  <ErrorMessage
                    name="mensaje"
                    component={() => <div>{errors.mensaje}</div>}
                  />
                </div>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="container-contact1-form-btn button">
                  <button className="contact1-form-btn button" type="submit">
                    <span>
                      Send Email
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
