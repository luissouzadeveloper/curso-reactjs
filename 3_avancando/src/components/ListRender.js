import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Zé', 'João', 'Maria']);

    const [users, setUsers] = useState([
        {id: 1, name: 'Ana', age: 25},
        {id: 2, name: 'Raimundo', age: 60},
        {id: 3, name: 'Maria', age: 47},
        {id: 4, name: 'Zé', age: 18},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} | {user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender