const UserDetails = ({nome, idade, profissao}) => {
    return (
        <>
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            {idade >= 18 ? (<p>Pode tirar habilitação</p>) : (<p>É menor de idade</p>)}
        </>
    )
}

export default UserDetails