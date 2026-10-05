import { Component } from "react";

class DibujosComplejosrender extends Component {

    // Necesitamos un array en state para ir generadno nuevos elementos al pulsar un botón
    state = {
        nombres: ["Alba", "Niko", "Chako", "Robin", "Chase"]
    }

    generarNombre = () => {
        // Podemos utilizar directamente el método del array push
        // Si es u objeto simple (string, int) no podemos asignar
        this.state.nombres.push("Ana");
        // si no reasignamos el alor mediante setState, no lo veremos
        this.setState({
            nombres: this.state.nombres
        })
    }

    render () {
        return (<div>
            <h1>Dibujos complejos render</h1>
            <button onClick={this.generarNombre}>GenerarNombre</button>
            {
                // Esto es código JSX de React
                this.state.nombres.map((nombre,index) => {
                    // Este código necesita un return para el render
                    return (<h4 style={{color: "blue"}} key={index}>{nombre}</h4>)
                })
            }
        </div>)
    }

}

export default DibujosComplejosrender;