// components
import FirstComponent from './components/FirstComponent'
import Teste from './components/Teste';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Event from './components/Event';
import Challenge from './components/Challenge';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Event />
      <Challenge />
      <Teste/>
    </div>
  );
}

export default App;
