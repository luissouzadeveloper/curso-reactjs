// CSS
import './App.css'

// Hook
import { useState } from 'react';

// Componentes
import MyComponent from './components/MyComponent';

function App() {

  const n = 15;

  const [name] = useState('José');

  const redTitle = false;

  return (
    <>
      {/* CSS global */}
      <h1>React com css</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p className='my-p'>Esse parágrafo é de App.jsx</p>

      {/* CSS inline */}
      <p style={{color: 'blue', padding: '20px', borderTop: '2px solid yellow'}}>
        Este elemento foi estilizado no css inline.
      </p>

      {/* CSS inline dinâmico */}
      <h2 style={n < 20 ? {color: 'purple'} : {color: 'yellow'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi hic pariatur nobis eius facilis cum nemo praesentium tenetur, iste quia illum numquam ipsa dicta quidem officiis similique, dolore temporibus?</h2>

      <h2 style={name === 'zé' ? {color: 'purple'} : null}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi hic pariatur nobis eius facilis cum nemo praesentium tenetur, iste quia illum numquam ipsa dicta quidem officiis similique, dolore temporibus?</h2>

      {/* Classe dinâmica */}
      <p className={redTitle ? 'red-title' : 'title'}>
        Esse parágrafo terá classe dinâmica
      </p>
    </>
  )
}

export default App
