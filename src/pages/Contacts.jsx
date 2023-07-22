import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {isLoading && !error && <Loader />}
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="The contact list is empty" />
        )}
      </Section>
    </>
  );
}
