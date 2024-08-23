// CSS
import './App.css'

// Imagens
import ImageReact from './assets/react-logo.png'

// Componentes
import ManagerData from './components/ManagerData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Messege from './components/Messege'
import ChangeMessegeState from './components/ChangeMessegeState'

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Vermelha', newCar: '', km: 0},
    {id: 2, brand: 'Chevrolet', color: 'Preto', newCar: '', km: 2000},
    {id: 3, brand: 'Ford', color: 'Azul', newCar: '', km: 30000},
  ];

  function showMessege() {
    console.log('Função em prop')
  }

  const [messege, setMessege] = useState("");

  const handleMessege = (msg) => {
    setMessege(msg);
  }

  return (
    <>
      {/* Imagem em public */}
      <div>
        <img src="public/mint-logo.png" alt="Linux mint" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={ImageReact} alt="React logo" />
      </div>

      {/* Hooks - useState */}
      <ManagerData />

      {/* Renderização de listas */}
      <ListRender />

      {/* Renderização condicional */}
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name='Luis' />

      {/* Props destructuring */}
      <CarDetails brand='VW' km={15000} color='Azul' />

      {/* Reaproveitamento de componentes */}
      <CarDetails brand='Ford' km={0} color='Preto' />
      <CarDetails brand='Mercedes' km={3000} color='Verde' />

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}

      {/* Fragaments */}
      <Fragments propFragment='Fragments' />

      {/* Prop Children */}
      <Container myValue={20}>
        <p>Parágrafo</p>
      </Container>

      {/* Funções em prop */}
      <ExecuteFunction myFunction={showMessege} />

      {/* State lift */}
      <Messege msg={messege}/>
      <ChangeMessegeState handleMessege={handleMessege} />
    </>
  )
}

export default App
