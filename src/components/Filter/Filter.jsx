import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filter';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const onHandlerFilterChange = ({ currentTarget: { value } }) => {
    const normalizeText = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizeText));
  };

  const onDisplayAll = () => {
    dispatch(setContactsFilter(''));
  };

  return (
    <label className={css.inputBlock}>
      Find contacts by name
      <input
        type="text"
        name="name"
        className={css.inputField}
        value={filter}
        placeholder="Enter name"
        onChange={onHandlerFilterChange}
      />
      <button type="button" onClick={() => onDisplayAll()}>
        Show all
      </button>
    </label>
  );
}
