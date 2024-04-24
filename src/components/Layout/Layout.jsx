import clsx from "clsx";
import css from "./Layout.module.css"
import { NavLink } from "react-router-dom";

const Layout = ({children}) => {

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };

  return (
    <div>
      <header>
        <nav className={css.navClass}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
