import React from "react"


const Titulo = ({texto, color, tamaño, alineado}) => {
    return (
        <h1 className="titulo" style={{ color: color, textAlign:alineado, fontSize:tamaño}}>
          {texto}
        </h1>

    );
}


export default Titulo;