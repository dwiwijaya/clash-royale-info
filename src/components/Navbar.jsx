// components/Navbar.js
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-evenly navbar content mt-4">
      <NavLink to="/" className="link text-reset">
        Chest
      </NavLink>
      <NavLink to="/profile" className="link text-reset">
        Profile
      </NavLink>
      <NavLink to="/setting" className="link text-reset">
        Setting
      </NavLink>
    </nav>
  );
};

export default Navbar;
