import css from "./App.module.css";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { ContactList } from "./components/ContactList/ContactList";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/operations";
// import { useEffect } from "react";
// import { selectError, selectLoading } from "./redux/contacts/selectors";
// import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      {/* <Suspense fallback={<Loader />}> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
    {/* </Suspense> */}
    </Layout>
    
  );

  // return (
  //   <div>
  //     <h1 className={css.header}>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {loading && !error && <b>Request in progress...</b>}
  //     <ContactList />
  //   </div>
  // );
}

export default App;
