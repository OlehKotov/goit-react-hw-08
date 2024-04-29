import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully deleted contact!');

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
      <li className={css.contact}>
        <div className={css.wrapper}>
          <div className={css.contactWrapper}>
            <FaUser className={css.contactIcon} />
            <p className={css.contactName}>{contact.name}</p>
          </div>
          <div className={css.contactWrapper}>
            <FaPhoneAlt className={css.contactIcon} />
            <p className={css.contactName}>{contact.number}</p>
          </div>
        </div>

        <button
          className={css.contactButton}
          type="button"
          onClick={() => {
            onDeleteContact(contact.id);
            notify();
          }}
        >
          Delete
        </button>
        <Toaster />
      </li>
  );
};

export default Contact;
