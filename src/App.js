import "./App.css";
import counterStore from "./stores/counterStore";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy, reset } = counterStore();
  return (
    <div className="app">
      <div className="container">
        <h2 className="title">Counter App</h2>
        <h1 className="count">{count}</h1>
        <div className="button-group">
          <button button className="circle-button decrease" onClick={() => decreaseBy(10)}>-10</button>
          <button className="circle-button decrease" onClick={decrease}>-</button>
          <button className="circle-button increase" onClick={increase}>+</button>
          <button className="circle-button increase" onClick={() => increaseBy(10)}>+10</button>
        </div>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
