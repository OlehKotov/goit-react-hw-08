import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
          <li className={css.header}>You dont have any contacts</li>
        )}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => {
            return <Contact contact={contact} key={contact.id} />;
          })}
      </ul>
    </div>
  );
};
export default ContactList;
