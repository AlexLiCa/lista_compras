import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Lista from "./Lista"



const FormularioCompra = () => {
    const[obj, setObj] = useState("");
    const[lista, setLista] = useState([])


    const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (obj !== ""){
            setLista([...lista, obj]);
            console.log(lista)
        }
        else{
            alert("no hay nada")
        }
     }


     const onChange = (e) => {
        if (e.target.name === "obj") {
            setObj(e.target.value);
        }
      };
    return ( 
    <form action="" onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">
                Agregar elemento
            </label>
        </div>
            {/* Formulario del login */}
        <div>
            <input 
                type="text"  
                name="obj" 
                id="obj"
                value = {obj}
                onChange={onChange}
                >
            </input>
            <button>Guardar</button>
        </div>
        <ul>
            {lista.map((objeto, i)=> <h1 key={i}> {objeto}</h1>)}
        </ul>
    </form>
    );
}
 
export default FormularioCompra;