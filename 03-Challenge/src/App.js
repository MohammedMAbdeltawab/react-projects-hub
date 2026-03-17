import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Challenge03></Challenge03>
      </header>
    </div>
  );
}

export default App;

function Challenge03() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleIncreaseStep() {
    setStep(step + 1);
  }
  function handleDecreaseStep() {
    if (step > 1) setStep(step - 1);
  }
  function handleIncreaseCount() {
    const newCount = count + step;
    setCount(newCount);
  }
  function handleDecreaseCount() {
    const newCount = count - step;
    setCount(newCount);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  let message;

  if (count === 0) {
    message = <p>Today is {date.toDateString()}</p>;
  } else if (count < 0) {
    message = (
      <p>
        {Math.abs(count)} days before today {date.toDateString()}
      </p>
    );
  } else {
    message = (
      <p>
        {count} days after today {date.toDateString()}
      </p>
    );
  }

  return (
    <div>
      <div className="row">
        <button onClick={handleDecreaseStep}>-</button>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span> {step} </span>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div className="row">
        <button onClick={handleDecreaseCount}>-</button>
        <span> Count : {count} </span>
        {/* <button onClick={handleIncreaseCount}>+</button> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="date">{message}</div>
      <p>Hello React</p>
      {count != 0 && (
        <button
          onClick={() => {
            date.setDate(new Date());
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
