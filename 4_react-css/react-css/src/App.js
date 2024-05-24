// Componentes
import MyComponent from './components/MyComponent';
import Title from './components/Title';

// CSS
import './App.css';

// Hooks
import {useState} from 'react'

function App() {
  const n = 15;
  const [name]= useState('Luis');
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
     <h1>React com CSS</h1>

     {/* CSS de componente */}
     <MyComponent />
     <p>Parágrafo do App.js</p>

     {/* Inline CSS */}
     <p style={{color: 'blue', padding: '7px', borderTop: '12px solid red'}}>Elemento estilizado em forma inline</p>

     {/* Inline CSS dinâmico */}
     <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'yellow'})}>CSS dinâmico</h2>

     <h2 style={name === 'Fernando' ? {color: 'red'} : null}>CSS dinâmico</h2>

     {/* Classe dinâmica */}
     <h2 className={redTitle ? 'red-title' : 'title'}>Título de classe dinâmica</h2>

     {/* CSS modules */}
     <Title/>
    </div>
  );
}

export default App;
