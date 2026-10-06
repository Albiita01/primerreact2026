import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    // Ejercicio del profe
    cajaNumero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();

        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];

        // El profe lo hace guardando un objeto
        for (let i = 0; i <= 10; i++) {
            let operacion = numero + " * " + i;
            let resultado = numero * i;
            let dato = {
                operacion: operacion,
                resultado: resultado
            }
            aux.push(dato);
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
                <h2>Tabla de multiplicar</h2>
                <form onSubmit={this.generarTabla}>
                    <label>Número: </label>
                    <input type='number' ref={this.cajaNumero} />
                    <button>Multiplicar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.numeros.map((fila, index) => {
                                return (<tr key={index}>
                                    <td>{fila.operacion}</td>
                                    <td>{fila.resultado}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    /* Este es mi ejercicio (sale bien)
    cajaNumero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();

        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        let result = "";

        for (let i = 0; i <= 10; i++) {
            result = numero * i;
            aux.push(
                <tr key={i}>
                    <td style={{ border: "1px solid grey", padding: "4px" }}><b>{numero} x {i} = </b>{result}</td>
                </tr>
            );
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
                <h2>Tabla de multiplicar</h2>
                <form onSubmit={this.generarTabla}>
                    <label>Número: </label>
                    <input type='number' ref={this.cajaNumero} />
                    <button>Multiplicar</button>

                    <table style={{ borderCollapse: "collapse", marginTop: "15px" }}>
                        <tbody>
                            {
                                this.state.numeros.map((fila, index) => {
                                    return fila;
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
        */
}
