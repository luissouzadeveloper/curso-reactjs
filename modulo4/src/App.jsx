// CSS
import './App.css'

// Componentes
import MyComponent from './components/MyComponent';

function App() {

  return (
    <>
      {/* CSS global */}
      <h1>React com css</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p className='my-p'>Esse parágrafo é de App.jsx</p>
    </>
  )
}

export default App
