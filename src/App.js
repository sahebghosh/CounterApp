import './App.css';
import {useState} from 'react';

function App() {

  let [counter, setCounter] = useState(5)

  const incrementHandler = () =>{
    if(counter === 20){
      return
    }else{
      setCounter(counter + 1)
    }
  }

  const decrementHandler = () =>{
    if(counter === 0){
      return
    }else{
      setCounter(counter - 1)
    }
    
  }

  return (
    <div className="App">
      <h1>Counter APP</h1>
      <h3>Counter value: {counter}</h3>
      <div>
      <button className="button" onClick={incrementHandler}>Increment</button>
      <button className="button buttonDecrement" onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
