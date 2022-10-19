import React, {useState, useEffect} from 'react';
import Titulo from "./Titulo"

const Lista = ({lista}) => {
    return ( 
        lista.map(elemento =><Titulo texto={elemento} color="black" tamaño="1.5rem" alineado="center"/>)
     );
}
 
export default Lista;