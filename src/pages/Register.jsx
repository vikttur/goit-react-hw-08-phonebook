import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '60vh',
  },
};

export default function Register() {
  return (
    <Section title="">
      <div style={styles.container}>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <RegisterForm />
      </div>
    </Section>
  );
}
