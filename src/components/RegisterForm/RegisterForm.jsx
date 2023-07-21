import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.inputBlock}>
        Username
        <input type="text" className={css.inputField} name="name" />
      </label>
      <label className={css.inputBlock}>
        Email
        <input type="email" className={css.inputField} name="email" />
      </label>
      <label className={css.inputBlock}>
        Password
        <input type="password" className={css.inputField} name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
