import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
    </div>
  );
};

export default Navigation;
