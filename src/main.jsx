import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Home from "./Home";
import Detalle from "./Detalle";
import Elimina from "./Elimina";
import Edita from "./Editar";
import Nuevo from "./Nuevo";
import Lista from "./Lista";
import NotFound from "./P404";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route exact path="/contactos" element={<Lista />} />
          <Route path="/contactos/detalle/:id" element={<Detalle />} />
          <Route path="/contactos/editar/:id" element={<Edita />} />
          <Route path="/contactos/eliminar/:id" element={<Elimina />} />
          <Route path="/contactos/nuevo" element={<Nuevo />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
