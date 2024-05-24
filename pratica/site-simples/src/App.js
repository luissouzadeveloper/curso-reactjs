// Components
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Numero from './Components/Numero';

// Styles
import './App.css';

// useState
import React, {useState} from 'react'
import UserDetails from './Components/UserDetails';

function App() {

  const [num, setNum] = useState(20);

  const pessoas = [
    {id: 1, nome: 'João', idade: 18, profissao: 'Entregador'},
    {id: 2, nome: 'Ana', idade: 15, profissao: 'Sem profissão'},
    {id: 3, nome: 'Ricardo', idade: 30, profissao: 'Programador'},
  ]

  return (
    <div className="App">
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/> 
      <Header />
      <Content />
      <Footer />

      {pessoas.map((user) => (
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </div>
  );
}

export default App;
