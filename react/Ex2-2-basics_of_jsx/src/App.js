import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = `I love React!`;
  
  return (
    <div className="App">
      <h4>{data.join(' ')}</h4>
      <p>{`${number1} + ${number2} = ${number1+number2}`}</p>
      <p>{`The string’s length is ${string.length}`}</p>
    </div>
  );
}

export default App;
