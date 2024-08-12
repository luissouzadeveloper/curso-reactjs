import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Pedro', 'Zé', 'Maria', 'João']);

    const [users] = useState([
        {id: 1, name: 'José', age: 30},
        {id: 2, name: 'Maria', age: 20},
        {id: 3, name: 'Marcos', age: 23},
    ])

    return (
        <div>
            <ul>
                {list.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} | {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender