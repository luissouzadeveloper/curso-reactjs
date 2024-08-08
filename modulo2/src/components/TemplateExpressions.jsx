const TemplateExpressions = () => {
    
    const name = 'João'
    const data = {
        age: 25,
        job: 'Programmer',
    };
    
    return (
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Sua idade é {data.age} anos e seu emprego é {data.job}</p>
            <p>{8 * 8}</p>
        </div>
    )
}

export default TemplateExpressions