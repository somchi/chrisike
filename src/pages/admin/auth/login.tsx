import AuthWrapper from './component/authwrapper';
import { LoginForm } from './component/login-form';
import { RESET_PASSWORD } from '../../../_libs/site-navigation';

export default function Login() {
  return (
    <AuthWrapper
      title="Sign-in"
      description={`Login to gain access`}
      formFooter={{
        title: 'Already have an account?',
        action: 'Sing in instead',
        linkPath: RESET_PASSWORD.href,
      }}
    >
      <LoginForm />
    </AuthWrapper>
  );
}
