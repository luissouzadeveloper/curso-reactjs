import React from "react";

const Numero = (props) => {
    return (
        <p>
            <p>Valor do state num em Numero: {props.num}</p>
            <button onClick={()=> props.setNum(props.num + 10)}>Soma 10</button>
        </p>
    )
}

export default Numero;