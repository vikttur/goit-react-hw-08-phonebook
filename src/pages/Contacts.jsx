import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContactsList,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectLoading);
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
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        {contacts ? (
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
