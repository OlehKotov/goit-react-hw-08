import css from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);


  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>  
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <b>Request in progress...</b>}
      <ContactList />
    </div>
  )
}

export default ContactsPage