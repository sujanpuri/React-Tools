import './App.css';
import SearchSort from './components/searchsort';
import Selection from './components/selection';
import Todo from './components/todo';

function App() {
  return (
    <div id='toolContainer'>
      <h1>Some Important Tools (&codes) of React</h1>
      <SearchSort/>
      <hr/>
      <Todo/>
      <hr/>
      <Selection/>
    </div>
  );
}

export default App;