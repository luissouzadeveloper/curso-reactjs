// Componente
import CarDetails from './components/CarDetails';

import './App.css';

function App() {
  const car = [
    { id: 1, name: 'Tracker', year: 2018, color: 'Vermelho', brand: 'Chevrolet' },
    { id: 2, name: 'Niro', year: 2005, color: 'Preto', brand: 'Kia' },
    { id: 3, name: 'Escort', year: 1992, color: 'Prata', brand: 'Ford' },
    { id: 4, name: 'Silverado', year: 1999, color: 'Azul', brand: 'Chevrolet' },
  ]

  return (
    <div className="App">
      <h2>Carros Variados</h2>

      {car.map((carro) => (
        <CarDetails key={carro.id} name={carro.name} year={carro.year} color={carro.color} brand={carro.brand} />
      ))}
    </div>
  );
}

export default App;
