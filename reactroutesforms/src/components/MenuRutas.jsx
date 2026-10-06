import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <span>
                    <a href='/'>Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/cine'>Cine</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/musica'>Musica</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/form'>Formulario</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/collatz'>Collatz</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/tabla'>Multiplicar</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/tablaV2'>Multiplicar V2</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href='/seleccion'>Selección múltiple</a>
                </span>
            </div>
        )
    }
}
