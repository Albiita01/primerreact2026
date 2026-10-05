import { Component } from "react";
export default class HijoNumero extends Component {

    seleccionarNumero = () => {
        this.props.sumarNumeros(this.props.numero);
    }

    render() {
        return (<div>
            <h1 style={{ color: "red" }}>
                Número: {this.props.numero}
            </h1>

            <button onClick={this.seleccionarNumero}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
} 