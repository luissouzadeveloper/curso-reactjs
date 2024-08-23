const ChangeMessegeState = ({handleMessege}) => {
    const msgs = ['Olá', 'Oi', 'Opa'];

    return (
        <>
            <button onClick={() => handleMessege(msgs[0])}>1</button>
            <button onClick={() => handleMessege(msgs[1])}>2</button>
            <button onClick={() => handleMessege(msgs[2])}>3</button>
        </>
    )
}

export default ChangeMessegeState