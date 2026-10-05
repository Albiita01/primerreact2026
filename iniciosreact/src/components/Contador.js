// DEBEMOS IMPORTAR useState DE REACT
import { useState } from "react";

function Contador() {

    // LAS VARIBALES SE DECLARAN CON NOMBRE PARA GET Y MÉTODO PARA SET
    const [ numero, setNumero ] = useState(0);

    const incrementar = () => {
        // Para modificar el valor, utilizamos el método que hemos declarado en set
        setNumero(numero + 1);
    }

    return(<div>
        <h1>Contador state</h1>
        {/** En {numero} se usa el get, solo que no explícitamente */} 
        <h3 style={{color: "blue"}}>Contador: {numero}</h3>
        <button onClick={ () => incrementar()}>Incrementar</button>
        {/** Esta es otra forma de escribirlo pero poniendo dentro la operación */}
        <button onClick={ () => {
            setNumero(numero - 1);
        }}>Restar</button>
    </div>)
}

export default Contador;