import { Component } from "react";

export default class HijoDeporte extends Component {

    seleccionarFavorito = () => {
        // Cuando deseemos, llamamos al padre mediante su método en props
        this.props.mostrarFavorito(this.props.nombre);
    }

    render () {
        return (<div>   
            <h4 style={{color: "blue"}}>Deporte: {this.props.nombre}</h4>
            {/** Se podría poner directamente lo del método seleccionarFavorito en el onClick para ahorrarnos crear el método seleccionarFavorito*/}
            <button onClick={this.seleccionarFavorito}>Favorito</button>
        </div>
        )
    }
}