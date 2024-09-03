// CSS
import './MyForm.css'

// Hooks
import { useState } from 'react'

const MyForm = (user) => {
    // 6- Controlled input

    // 3- Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Eviando formulário');
        console.log(name, email, bio);

        // 7 - limpar formulário
        setName('')
        setEmail('')
    }

    return (
        <>
            {/* 1- Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
                </div>

                {/* 2- label envolvendo input */}
                <label>
                    {/* 4- manipulação de state simplificada */}
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder='Digite seu nome' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>

                {/* 5- envio de form */}

                {/* Textarea */}
                <label htmlFor="bio">
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm