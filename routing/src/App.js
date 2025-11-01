import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/help"}>Help</NavLink>
        <NavLink to={"/contact"}>Contact us</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
