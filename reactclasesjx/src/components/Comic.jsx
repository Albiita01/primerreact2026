import { Component } from "react";

export default class Comic extends Component {

    render() {
        return (<div>
            <h1 style={{ color: "blue" }}>{this.props.comic.titulo}</h1>
            <p>{this.props.comic.descripcion}</p>
            <button onClick={() => {
                this.props.seleccionarComic(this.props.comic);
            }}>Seleccionar favorito</button>
            <button onClick={() => {
                // Cojo el índice que le he pasado con "indice"
                let index = parseInt(this.props.indice);
                // Llamo al método del padre de deleteComic y le paso el índice qe he obtenido
                this.props.deleteComic(index);
            }}>Delete</button>
            <img src={this.props.comic.imagen} style={{ width: "70px", height: "90px" }} />
        </div>)
    }
}