const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Posso renderizar isso!</h1>
        } else {
            return <h1>Posso renderizar isso também!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou')}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log('Isso não deveria existir!');
                    }
                }}>Clica aqui também</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events