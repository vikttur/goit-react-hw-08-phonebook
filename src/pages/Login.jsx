import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '60vh',
  },
};

export default function Login() {
  return (
    <Section title="">
      <div style={styles.container}>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <LoginForm />
      </div>
    </Section>
  );
}
