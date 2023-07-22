import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (user.email === '' || user.password === '') {
      alert('Empty fields are not allowed. Enter the data');
      return;
    }

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.inputBlock}>
        Email
        <input type="email" className={css.inputField} name="email" />
      </label>
      <label className={css.inputBlock}>
        Password
        <input type="password" className={css.inputField} name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
