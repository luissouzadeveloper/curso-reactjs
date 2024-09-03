// CSS
import './App.css'
import MyForm from './components/MyForm'

// Componentes


function App() {

  return (
    <>
      <h2>Forms</h2>   
      <MyForm user={{name: 'João', email: 'joao@gmail.com'}}/>   
    </>
  )
}

export default App
