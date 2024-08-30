// CSS
import './MyForm.css'

// Hooks
import { useState } from 'react'

const MyForm = () => {

    // 3- Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (event) => {
        setName(event.target.value);
    };

    console.log(name);

    return (
        <>
            {/* 1- Criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
                </div>

                {/* 2- label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder='Digite seu nome' />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm