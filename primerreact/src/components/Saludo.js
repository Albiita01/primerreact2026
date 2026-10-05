function Saludo(props) {
    var mensaje = "Hoy es viernes";
    // let nombre = props.nombre;
    // let edad = props.edad;

    const {nombre, edad} = props;

    // Los datos del nombre y la edad están en index.js
    return (<div>
        <h1>Buenas!</h1>
        <h2>{mensaje} Qué tal, {nombre}?</h2>
        <h3>Tu edad es {props.edad}</h3>
    </div>);
}

export default Saludo;