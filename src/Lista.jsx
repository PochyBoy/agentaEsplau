import React, { useContext, useEffect, useState } from "react";
import Controller from "./ContactesController";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import TraductorContext from "./TraductorContext.js";

import Taula from "./Taula";

export default () => {
  const [dades, setDades] = useState([]);

  const Traductor = useContext(TraductorContext);
 
  const cargaDatos = () => {
    const data = Controller.getAll();
    setDades(data);
  }
  useEffect(() => {
   cargaDatos();
  }, []);

  const columnes = [
    {
      nom: "nom",
      titol: Traductor.traduce("nombre"),
    },
    {
      nom: "email",
      titol: Traductor.traduce("email"),
    },
    {
      nom: 'tel',
      titol: 'Telefono'
    }
  ];

  return (
    <>
      <Row>
        <Col xs="10">
          <h3>{Traductor.traduce("listado")}</h3>
        </Col>
        <Col className="text-end">
          <Link className="btn btn-primary btn-sm" to="/contactos/nuevo">
            {Traductor.traduce("nuevo")}
          </Link>
        </Col>
      </Row>

      <Taula
        datos={dades}
        columnas={columnes}
        rutaShow="/contactos/detalle/"
        rutaEdit="/contactos/editar/"
        rutaDelete="/contactos/eliminar/"
      />

    </>
  );
};
