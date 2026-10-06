import React, { Component } from 'react'

export default class FormSimple extends Component {

    caja = React.createRef();

    enviarInfo = (event) => {
        event.preventDefault(); // Esto es para que no se recargue la página al pulsar un botón
        let nombre = this.caja.current.value;
        alert('Datos enviados ' + nombre);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enviarInfo}>
                    <h1>Formulario simple</h1>
                    <label>Nombre: </label>
                    <input type='text' ref={this.caja} />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
