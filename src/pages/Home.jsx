import { Section } from 'components/Section/Section';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Section title="">
      <div style={styles.container}>
        <h1 style={styles.title}>Contact manager welcome page </h1>
      </div>
    </Section>
  );
}
