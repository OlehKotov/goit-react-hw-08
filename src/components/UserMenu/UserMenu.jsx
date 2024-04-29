import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import clsx from "clsx";
import css from "./UserMenu.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.container}>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>

      <div className={css.textWrap}>
        <span>Hi, {userName}</span>
        <button type="button" onClick={onLogout} className={css.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
