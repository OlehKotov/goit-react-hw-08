import css from "./HomePage.module.css";
import { FaSquarePhone } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className={css.container}>
      <FaSquarePhone className={css.icon} />
      <h1 className={css.heading}>Welcome to Phonebook</h1>
    </div>
  );
};

export default HomePage;
