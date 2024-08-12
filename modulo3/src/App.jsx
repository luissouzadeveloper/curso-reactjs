// CSS
import './App.css'

// Imagens
import ImageReact from './assets/react-logo.png'

// Componentes
import ManagerData from './components/ManagerData'

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
    </>
  )
}

export default App
