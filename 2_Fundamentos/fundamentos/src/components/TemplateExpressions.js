const TemplateExpressions = () => {
    const name = 'Luis'
    const data = {
        age: 24,
        job: 'Programmer'
    }

    return (
        <div>
            <h1>Olá {name}, tudo ok?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{10 * 5}</p>
            <p>{console.log('JSX React!')}</p>
        </div>
    )
}

export default TemplateExpressions