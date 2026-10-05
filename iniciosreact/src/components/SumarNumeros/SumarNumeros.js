import './SumarNumeros.css';

function SumarNumeros(props) {

    const sumarNumeros = () => {
        let suma = parseInt(props.numero1) + parseInt(props.numero2);
        console.log("la suma de " + props.numero1 + " + " + props.numero2 + " es " + suma);
    }

    const sumarNumerosA2 = (numero1, numero2) => {
        let suma = numero1 + numero2;
        console.log("la suma de " + numero1 + " + " + numero2 + " es " + suma);
    }

    return (<div>
        <h1>Sumar números {props.numero1} y {props.numero2}</h1>
        <button onClick={() => sumarNumeros()}>Sumar</button>
        <br/>
        <h1>Sumar números a 2</h1>
        <button onClick={ () => sumarNumerosA2(2, 100)}>Sumar 100</button>
        <button onClick={ () => sumarNumerosA2(2, 1)}>Sumar 1</button>
        <button onClick={ () => sumarNumerosA2(2, 2)}>Sumar 2</button>
    </div>)
}

export default SumarNumeros;