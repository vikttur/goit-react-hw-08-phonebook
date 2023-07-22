import { useSelector } from 'react-redux';
import {
  selectContactsList,
  selectContactsFilter,
} from 'redux/contacts/selectors';
import ContactItems from 'components/ContactItems/ContactItems';
import css from './ContactList.module.css';

export function ContactList() {
  const allContacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const filteredContacts = [
    ...allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    ),
  ];

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItems key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
