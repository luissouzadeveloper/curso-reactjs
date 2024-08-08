// Componente
import MyComponent from "./MyComponent";

const FirstComponent = () => {
    
    // Função return
    return (
        <>
            <div>
                <h1>Meu primeiro componente!</h1>
            </div>
            <div>
                <p className="teste">JSX</p>
            </div>

            {/* Isso é um comentário */}

            <MyComponent />
        </>
    )
}

export default FirstComponent;