import React, { useState } from 'react'

const Teste = () => {
    const [estado, setEstado] = useState();

    return (
        <div>
            <p>State: {estado}</p>
            <button onClick={() => setEstado(10)}>Buscar</button>
        </div>
    )
}

export default Teste