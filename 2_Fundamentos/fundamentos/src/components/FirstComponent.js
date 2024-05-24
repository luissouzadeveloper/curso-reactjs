// Arquivo de estilos

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    
    return (
        <div>
            <h1>Meu primeiro componente!</h1>
            <p className='teste'>Meu texto</p>
            {/* Meu comentário */}
            <MyComponent />
        </div>
    );
};

export default FirstComponent;