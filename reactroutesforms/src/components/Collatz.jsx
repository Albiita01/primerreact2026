import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();

    generarCollatz = (event) => {
        event.preventDefault();
        // Capturamos el número de la caja
        let numero = parseInt(this.cajaNumero.current.value);
        // Creo una variable auxiliar para evitar bucles infinitos con el render y el state
        let aux = [];

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            // Almacenamos el número en el array
            // Uso la variable auxiliar
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
    }

    state = {
        numeros: []
    }

    render() {
        return (
            <div>
                <h2>Conjetura Collatz</h2>
                <form onSubmit={this.generarCollatz}>
                    <label>Número: </label>
                    <input type='number' ref={this.cajaNumero} />
                    <button>Mostrar Collatz</button>
                </form>

                <ul>
                    {
                        this.state.numeros.map((num, index) => {
                            return (<li key={index}>{num}</li>)
                        })
                    }
                </ul>

            </div>
        )
    }
}
