import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactItems.module.css';

export default function ContactItems({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.item}>
      <span className={css.marker}></span>
      <p className={css.label}>{name}</p>
      <p className={css.number}>{number}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
