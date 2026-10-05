function SaludoHijo(props) {

    // Necesitamos capturar en una variable el método de props del método padre
    let ejecutarPadre = props.metodoPadre;

    return(<div>
        <h2>Saludo hijo</h2>
        <button onClick={ () => ejecutarPadre("Alba" + " " + props.idHijo)}>Llamar al padre</button>
    </div>)
}

export default SaludoHijo;