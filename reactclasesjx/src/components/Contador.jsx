import { Component } from "react";

class Contador extends Component{

    // La declaración de variables ya no utiliza JS (no usa const, let, var)
    numero = 1;

    // Con los métodos sucede lo mismo
    incrementoNumero = () => {
        // Para acceder a cualquier elemento de la clase, se utiliza la palabra this
        this.numero += 1;
        console.log("Número: " + this.numero);
    }

    // Las variables state se declaran en un objeto de la clase
    state = {
        // valor: 1
        valor: parseInt(this.props.inicio)
    }

    incrementarValor = () => {
        var titulos = [];
        titulos.push(<h1>Titulo 1</h1>);
        titulos.push(<h1>Titulo 2</h1>);
        titulos.push(<h1>Titulo 3</h1>);
        return titulos;

        // Para modificar el valor de cualquier elemento del state se utiliza setState
        // y nos permite modificar una o varias variables a la vez
        this.setState({
            valor: this.state.valor + 1
        })
    }

    // La sintaxis de la llamada a los métodos ha cambiado en render
    // Puedo llamar directamente al método onclick (sin lambda) y sin paréntesis

    render() {
        return (<div>
            <h1>Contador JSX: {this.props.inicio}</h1>
            <h3 style = {{color:"red"}}>Valor: {this.state.valor}</h3>
            <button onClick={this.incrementarValor}>Incrementar valor</button>
            <button onClick={this.incrementoNumero}>Incrementar número</button>
            {/** Esto es otra forma de escribirlo pero usando lambda*/}
            <button onClick={ () => {
                this.incrementoNumero();
            }}>Incrementar lambda</button>
        </div>)
    }
}

export default Contador;