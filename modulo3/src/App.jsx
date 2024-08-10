// CSS
import './App.css'

// Imagens
import ImageReact from './assets/react-logo.png'

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
    </>
  )
}

export default App
