import { useState } from "react";

function Car(props) {
    // Variable para averiguar el estado del coche (apagado/encendido)
    const [ estado, setEstado ] = useState(false); // Que sea reactivo
    const [ velocidad, setVelocidad] = useState(0);

    // Declaramos un objeto coche con los datos de props
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    // Vamos a crear un método que dibujará HTML dinámico. Dependiendo del estado, dibujará un mensaje u otro
    const comprobarEstado = () => {
        if (estado == true) {
            return (<h1 style={{color: "blue"}}>Arrancado</h1>)
        } else {
            return (<h1 style={{color: "red"}}>Apagado</h1>)
        }
    }

    const acelerarCoche = () => {
        if (estado == false) {
            alert("El coche está apagado");
            setVelocidad(0);
        } else {
            if (velocidad >= coche.velocidadMaxima) {
                setVelocidad(coche.velocidadMaxima);
            } else {
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    
    return (<div>
        <h1>{coche.marca} {coche.modelo}</h1>
        {/* ESTADO DEL COCHE Y QUE SIEMPRE SE ACTIVE */}
        { comprobarEstado() }
        <h2 style={{color: "orangered"}}>Velocidad actual: {velocidad}</h2>
        <button onClick={ () => {
            setEstado(!estado);
        }}>On/Off coche</button>
        <button onClick={ () => acelerarCoche()}>Acelerar {coche.aceleracion} Km/h</button>
    </div>)
}

export default Car;