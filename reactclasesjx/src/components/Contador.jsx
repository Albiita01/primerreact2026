const { Component } = require("react");

class Contador extends Component{

    // La declaración de variables ya no utiliza JS (no usa const, let, var)
    numero = 1;

    // Con los métodos sucede lo mismo
    incrementoNumero = () => {
        // Para acceder a cualquier elemento de la clase, se utiliza la palabra this
        this.numero += 1;
        console.log("Número: " + this.numero);
    }

    // La sintaxis de la llamada a los métodos ha cambiado en render
    // Puedo llamar directamente al método onclick (sin lambda) y sin paréntesis

    render() {
        return (<div>
            <h1>Contador JSX</h1>
            <button onClick={this.incrementoNumero}>Incrementar número</button>
            {/** Esto es otra forma de escribirlo pero usando lambda*/}
            <button onClick={ () => {
                this.incrementoNumero();
            }}>Incrementar lambda</button>
        </div>)
    }
}

export default Contador;