import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState('Zé');
    
    return (
        <div>
            {/* Conditional simple with && */}
            <h1>X será exibido?</h1>

            {x && <p>Será exibido se x for true</p>}
            {!x && <p>Não será exibido</p>}

            {/* Conditional compost - If else */}
            {name === 'José' ? (
                <div>
                    <p>O nome é João</p>
                </div>) : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )}
                <button onClick={() => setName('José')}>Alterar nome</button>
        </div>
    )
}

export default ConditionalRender