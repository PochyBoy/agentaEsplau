import React, {useContext} from 'react';
import TraductorContext from "./TraductorContext.js";


export default () => {
    const Traductor = useContext(TraductorContext);
    return (
        <h3>{Traductor.traduce('titol')}</h3>
    );
}