import SaludoHijo from './SaludoHijo';

function SaludoPadre() {

    // Necesitamos un m´todo para que el hijo se comunique con nosotros
    const metodoPadre = (nombre) => {
        console.log("Yo soy tu padre, " + nombre);
    }

    return(<div>
        <h1>Saludo padre</h1>
        {/** Enviamos  */}
        <SaludoHijo idHijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idHijo="2" metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;