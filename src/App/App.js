import { useState, useMemo } from "react";
import s from "./App.module.css";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";
import defaultContacts from "../contacts.json";
import { useLocalStorage } from "../Hooks/useLS";
import store from "../redux/store";
import { render } from "react-dom";

function App() {
  // const [allContacts, setAllContacts] = useLocalStorage(
  //   "allContacts",
  //   defaultContacts
  // );
  // const [filter, setFilter] = useState("");

  // const formSubmit = (obj) => {
  //   if (
  //     allContacts.find(
  //       (contact) => contact.name.toLowerCase() === obj.name.toLowerCase()
  //     )
  //   ) {
  //     return alert("This contact has already been added to the list");
  //   }
  //   setAllContacts([obj, ...allContacts]);
  // };

  // const handleContacts = useMemo(() => {
  //   let onContactsFilter = filter.toLowerCase();
  //   return allContacts.filter( contact =>
  //     contact.name.toLowerCase().includes(onContactsFilter),
  //     );
  // }, [filter, allContacts]);

  // const handleContacts = () => {
  //   const onContactsFilter = filter.toLowerCase();
  //   return allContacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(onContactsFilter)
  //   );
  // };

  // const filterChange = (evt) => {
  //   setFilter(evt.target.value);
  // };

  // const deleteContact = (contactId) => {
  //   setAllContacts(allContacts.filter((contact) => contact.id !== contactId));
  // };

  // const getContacts = handleContacts();
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
