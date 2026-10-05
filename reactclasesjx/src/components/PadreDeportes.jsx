import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeportes extends Component {

    // No se pone dentro de state porque no va a ser dinámico. Una vez el dibujo ya esté hecho, no va a ser actualizado
    deportes = ["Fútbol", "Tenis", "Fórmula 1", "MotoGP", "UFC"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render () {
        return (<div>
            <h1>Padre deportes</h1>
                <h3 style={{color: "green", backgroundColor: "lightgreen"}}>Su deporte favorito es: {this.state.favorito}</h3>
            {
                this.deportes.map((sport, index) => {
                    return (<HijoDeporte nombre={sport} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                })
            }
        </div>
        )
    }
}