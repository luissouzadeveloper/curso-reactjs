// Componentes
import ManageData from './components/ManageData';
import Teste from './components/Teste';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserManager from './components/ShowUserManager';
import CarDetails from './components/CarDetails';

// Imagens
import Mint from './assets/linux-mint.png'

// CSS
import './App.css';

// Hooks
import { useState } from 'react';

function App() {
  const name = 'André'

  const [userName] = useState('Maria')

  return (
    <div className="App">
      <h1>Avançando em react</h1>

      {/* Imagem públicas */}
      <div>
        <img src="/fedora-linux.png" alt="Fedora Workstation" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={Mint} alt="Linux Mint" />
      </div>

      <ManageData />

      <Teste/>
      <ListRender/>

      <ConditionalRender />
      {/* Props */}
      <ShowUserManager name={userName} />
      {/* Props destructuring */}
      <CarDetails brand='Ford' km={1000} color='Cinza'/>
    </div>
  );
}

export default App;
