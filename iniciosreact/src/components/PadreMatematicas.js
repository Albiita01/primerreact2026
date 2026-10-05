import Matematicas from "./Matematicas";

function PadreMatematicas(props) {

    const dobleNumero = (num) => {
        let doble = num * 2;
        console.log("Doble: " + doble);
    }

    const tripleNumero = (num) => {
        let triple = num * 3;
        console.log("Triple: " + triple);
    }

    return (
        <div>
            <h2>Componente Padre (Número base: {props.num})</h2>
            <Matematicas numero="7" dobleNumero={dobleNumero} tripleNumero={tripleNumero}/>
            <Matematicas numero="99" dobleNumero={dobleNumero} tripleNumero={tripleNumero}/>
        </div>
    );
}

export default PadreMatematicas;