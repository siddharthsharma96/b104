import "./App.css";
import { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

function App() {
  // variable, function
  let [val, setVal] = useState(0);
  let pref = useRef();
  const handleIncrement = () => {
    setVal(val + 1);
    console.log(val);
  };
  const handleDecrement = () => {
    setVal(val - 1);
    console.log(val);
  };

  // arguments,1. callback,array of dependencies
  useEffect(() => {
    if (val < 0) {
      pref.current.style.color = "red";
      let sd = setTimeout(() => {
        setVal(0);
      }, 2000);

      // cleanup
      return () => {
        clearTimeout(sd);
      };
    } else {
      pref.current.style.color = "green";
    }

    console.log(pref);
  }, [val]);
  // 1. case Array of dependecies empty
  // Callback will run only 1 time

  // 2. case Array of dependencies put some state value
  // it will run everytime whenever state value change

  // 3.without second argument
  // Wheneever any state values updates it will run
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        val={val}
        pref={pref}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
