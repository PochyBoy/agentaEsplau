import React, {useState, useContext} from "react";
import {Navigate, Link, useParams} from "react-router-dom";
import { Form, Button} from 'react-bootstrap';
import TraductorContext from "./TraductorContext.js";

import Controller from './ContactesController';

export default (props) => {
  const Traductor = useContext(TraductorContext);
  const parametros = useParams();

  const id = parametros.id;
  const contacto = Controller.getById(id);

  if (!contacto){
    return <Navigate to="/contactos" />
  }

  const [nom, setNom] = useState(contacto.nom);
  const [email, setEmail] = useState(contacto.email);
  const [tel, setTel] = useState(contacto.tel);
  const [cal,setCal] = useState(contacto.cal)
  const [volver, setVolver] = useState(false);

  const guardar = () => {
    const contactoModificado = {
      id: contacto.id,
      nom,
      email: email,
      tel: tel,
      cal:cal
    };

    Controller.replaceItem(contactoModificado);
    setVolver(true);
  }

  if (volver){
    return <Navigate to="/contactos" />
  }

  return (
    <>

      <h3>{Traductor.traduce('editar')}</h3>
      <hr />

      <Form.Group>
        <Form.Label>{Traductor.traduce('nombre')}</Form.Label>
        <Form.Control type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>{Traductor.traduce('email')}</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>{Traductor.traduce('tel')}</Form.Label>
        <Form.Control type="text" name="tel" value={tel} onChange={(e) => setTel(e.target.value)}  />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control type="text" name="tel" value={cal} onChange={(e) => setCal(e.target.value)}  />
      </Form.Group>

      <hr />
      <Link className='btn btn-danger' to='/contactos' >{Traductor.traduce('cancelar')}</Link>
      {' '}
      <Button variant="success" onClick={guardar} >{Traductor.traduce('guardar')}</Button>
    </>
  );
};
