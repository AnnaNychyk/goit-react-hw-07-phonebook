import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';
import { getLoading } from 'redux/contacts/contacts-selectors';

const Phonebook = () => {
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter onChange={onSetFilter} value={filter} />

      {loading && <p>...load contacts</p>}

      <ContactList />
    </div>
  );
};

export default Phonebook;
