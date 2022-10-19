import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Titulo from "./components/Titulo"
import Lista from "./components/Lista"
import FormularioCompra from './components/FormularioCompra';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (  
    <>
      <>
      <Titulo texto="Lista de compras" color="maroon" tamaño="2.5rem" alineado="center"/>
      <FormularioCompra/>
      </>
    </>

  );
}
 
export default App;

root.render(<App/>);
