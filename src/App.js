import './App.css';
import Selection from './components/selection';
import Todo from './components/todo';

function App() {
  return (
    <div id='toolContainer'>
      <h1>Some Important Tools (&codes) of React</h1>
      <Todo/>
      <hr/>
      <Selection/>
    </div>
  );
}

export default App;