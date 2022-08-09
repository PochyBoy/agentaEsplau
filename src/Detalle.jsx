import React, {useContext, useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import Controller from './ContactesController';

import TraductorContext from "./TraductorContext.js";

export default (props) => {
  const Traductor = useContext(TraductorContext);

  const [contacto, setContacto] = useState({});
  const parametros = useParams();

  useEffect(()=>{
    const id = parametros.id;
    const data = Controller.getById(id);
    setContacto(data);
  }, [])

  return (
    <>
      <h3>{Traductor.traduce('detalle')}</h3>
      <hr />
      <h1>{Traductor.traduce('nombre')}: {contacto.nom}</h1>
      <h3>{Traductor.traduce('email')}: {contacto.email}</h3>
      <h3>{Traductor.traduce('tel')}: {contacto.tel}</h3>
      <h3>{'Fecha de Nacimiento'}:{contacto.cal}</h3>
      <hr />
      <Link className='btn btn-primary' to='/contactos' >{Traductor.traduce('volver')}</Link>
    </>
  );
};
