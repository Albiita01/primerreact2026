import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {

    selectMultiple = React.createRef();

    mostrarSleccionados = (event) => {
        event.preventDefault();

        // Si recuperamos value, solamente vendrá el primer elemento
        // Necesitamos recuperar las options
        let options = this.selectMultiple.current.options;
        let data = "";

        // Esto simplemente contiene as opciones, debemos preguntar cuales están seleccionadas
        for (var opt of options) {
            if (opt.selected == true) {
                data += opt.value + ", ";
            }
        }
        this.setState({
            seleccionados: data
        })

    }

    state = {
        seleccionados: ""
    }

    render() {
        return (
            <div>
                <h2>SeleccionMultiple</h2>
                <h3 style={{ color: "blue" }}>{this.state.seleccionados}</h3>
                <form onSubmit={this.mostrarSleccionados}>
                    <label>Seleccione elementos: </label>
                    <select size="6" multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                        <option>Elemento 8</option>
                    </select>
                    <button>Show selected</button>
                </form>
            </div>
        )
    }
}
