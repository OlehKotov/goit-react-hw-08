
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <b>Request in progress...</b>}
      <ContactList />
    </div>
  )
}

export default ContactsPage