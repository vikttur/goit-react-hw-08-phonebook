import css from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={css.section}>
      {title && <h2 className={css.header}>{title}</h2>}
      {children}
    </section>
  );
}
