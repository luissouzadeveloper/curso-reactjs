// CSS
import './App.css'

// Imagens
import ImageReact from './assets/react-logo.png'

// Componentes
import ManagerData from './components/ManagerData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {

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
    </>
  )
}

export default App
