import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={buildLinkClass}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
