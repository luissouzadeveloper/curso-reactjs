const UserDetails = ({name, age, job}) => {

    return (
        <>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
            </ul>
        </>
    )
}

export default UserDetails