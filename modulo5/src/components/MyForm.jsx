// CSS
import './MyForm.css'

const MyForm = () => {
    return (
        <>
            {/* 1- Criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite seu nome' />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm