import "./App.css";
import Counter from "./Counter";
// import Counter from "./Counter";

function App() {
  let val = 0;
  const handleIncrement = () => {
    val = val + 1;
    console.log(val);
  };
  const handleDecrement = () => {
    val = val - 1;
    console.log(val);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
