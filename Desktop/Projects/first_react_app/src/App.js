import Classcomponent from './components/Classcomponent';
import './App.css';
import Functioncomponent from './components/Functioncomponenet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Class Component</h1>
        <Classcomponent />
        <br />
        <h1>Functional Component</h1>
        <Functioncomponent />
      </header>
    </div>
  );
}

export default App;
