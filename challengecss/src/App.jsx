// CSS
import './App.css'

// Componentes
import ShowCars from './components/ShowCars'

function App() {

  const cars = [
    {id: 1, name: 'Prisma', brand: 'Chevrolet', year: 2018},
    {id: 2, name: 'Corcel', brand: 'Ford', year: 1980},
    {id: 3, name: 'Ford ka', brand: 'Ford', year: 2020},
  ]

  return (
    <>
      <h1>Carros</h1>

      {cars.map((elements) => (
        <ShowCars key={elements.id} name={elements.name} brand={elements.brand} year={elements.year} />
      ))}
    </>
  )
}

export default App
