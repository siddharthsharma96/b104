import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      {/* BEM */}
      <div className="header__logo-container">
        <NavLink to={"/"}>
          <img className="header__logo" src="/images/image.png" alt="a"></img>
        </NavLink>
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/help"}>Help</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>
              Search <SearchIcon></SearchIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
