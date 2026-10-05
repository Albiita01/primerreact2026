function DobleNumero() {
    let mensaje = "Hoy es viernes!!";

    const ejecutarDoble = (numero) => {
        let doble = numero * 2;
        console.log(doble);
    }
    
    const cambiarMensaje = () => {
        console.log("Antes del cambio: " + mensaje);
        mensaje = "Es finde!!"
        console.log("Después del cambio: " + mensaje);
    }    

    var estilo = {
        color: "red",
        backgroundColor: "blue"
    }

    return(<div>
        <h1 style={estilo}>Métodos doble número</h1>
        <h2 style={{color: "#10cbff"}}>{mensaje}</h2>
        <button onClick={ () => cambiarMensaje()}>Modificar mensaje</button>
        <button onClick={ () => ejecutarDoble(7)}>Doble 7</button>
        <button onClick={ () => ejecutarDoble(8)}>Doble 8</button>
        <button onClick={ () => ejecutarDoble(9)}>Doble 9</button>
    </div>)
}

export default DobleNumero;