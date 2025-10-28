import "./App.css";
import Component1 from "./Component1";
import { Component2 } from "./Component2";
import GrandFather from "./Grandfather";

function App() {
  let message = "Message from App component";
  let myWill = "My all property belongs to my grandson";
  return (
    <div className="App">
      <h1>Heelo world</h1>
      {/* <Component1 asd={message}></Component1>
      <Component2></Component2> */}
      <GrandFather myWill={myWill}></GrandFather>
    </div>
  );
}

export default App;
