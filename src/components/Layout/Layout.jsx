import clsx from "clsx";
import css from "./Layout.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header>
        <nav className={css.navClass}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>

              <div>
                <span>Hi, {userName}</span>
                <button type="button" onClick={onLogout}>Logout</button>
            </div>
            </>
          ) : (
            <>
              <NavLink to="/register" className={buildLinkClass}>
                Register
              </NavLink>
              <NavLink to="/login" className={buildLinkClass}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
