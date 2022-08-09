
import React, {Component} from 'react';


export const SeparadorY = (props) => <div style={{height: props.y}} ></div>;
export const SeparadorX = (props) => <div style={{width: props.x, display: 'inline-block'}} ></div>;

export const Titol = (props) => <h3>{props.children}</h3>;

export const EspaiDalt = (props) => <div style={{height: 50}} ></div>;
