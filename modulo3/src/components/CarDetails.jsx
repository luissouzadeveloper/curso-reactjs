const CarDetails = ({brand, km, color, newCar}) => {  // <- Destructuring
    return (
        <div>
            <h2>Detalhes do carro</h2>

            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
                <li>Carro novo: {newCar}</li>
            </ul>

            {newCar === 0 ? (
                <p>O carro é 0 km!</p>
            ) : (
                <p>O carro não é 0 km!</p>
            )}
        </div>
    )
}

export default CarDetails