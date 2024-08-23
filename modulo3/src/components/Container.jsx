const Container = ({children, myValue}) => {
    return (
        <>
            {children}
            <p>O valor é: {myValue}</p>
        </>
    )
}

export default Container