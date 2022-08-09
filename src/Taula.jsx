import React, {useContext} from "react";
import { Table } from "react-bootstrap";
import {
  Link,
} from "react-router-dom";

// importamos TraductorContext
import TraductorContext from "./TraductorContext.js";

export default (props) => {

  // useContext da acceso al contenido del último provider para este contexto
  // en este caso, el contenido incluye la función traduce, que utilizamos para 
  // mostrar los mensajes en el idioma de la aplicación
  // al cambiar el idioma se produce un nuevo render en App que afecta a todo el arbol de componentes
  const Traductor = useContext(TraductorContext);

  const filas = props.datos.map((el) => (
    <tr key={el.id}>
      {props.columnas.map((col, idx) => <td key={idx}>{el[col['nom']]}</td>)}
      <td><Link className="btn btn-success btn-sm" to={props.rutaShow + el.id} >{Traductor.traduce('mostrar')}</Link></td>
      <td><Link className="btn btn-primary btn-sm" to={props.rutaEdit + el.id} >{Traductor.traduce('editar')}</Link></td>
      <td><Link className="btn btn-danger btn-sm" to={props.rutaDelete + el.id} >{Traductor.traduce('eliminar')}</Link></td>
    </tr>
  ));

  return (
    <>
    <Table striped>
      <thead>
        <tr>
          {props.columnas.map((el, idx) => <th key={idx}>{el['titol']}</th>)}
          <th></th>
          <th></th>
          <th></th>
        </tr>
      
      </thead>
      <tbody>{filas}</tbody>
      <tfoot></tfoot>
    </Table>
    </>
  );
};
