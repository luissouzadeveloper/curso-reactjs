const Challenge = () => {
    const a = 3;
    const b = 6;

    const sumValues = () => {
        console.log(`A soma é: ${a + b}`) 
    }

    return (
        <div>
            <p>Valor 1: {a}</p>
            <p>Valor 2: {b}</p>

            <div>
                <button onClick={sumValues}>Somar</button>
            </div>
        </div>
    )
}

export default Challenge;