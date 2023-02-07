import logo from './logo.svg';
import './App.css';
import findLongestWord, { nbrOccurence, sommeNotes} from './Ecmasript/Ecmascript';
import searchById from './Ecmasript/fonction';

function App() {

  const mots = [
    "wacef", "haifa", "waceffff", "nouri"
  ]
  const input = [
    ['a', 'a', 'b'],
    ['c', 'c', 'c'],
    ['d', 'e', 'f'],
    ['a', 'a', 'b'],
  ]
  const tab = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 },
  ]
  
  console.log(findLongestWord(mots))
  console.log(nbrOccurence(input))
  console.log(sommeNotes(tab))
  console.log(searchById(2))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
