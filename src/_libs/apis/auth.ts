import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './friebase';

export const auth = getAuth(app);

export const signinUser = (email: string, password: string) => {
  const response = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;

      const errorMessage = error.message;
      return errorMessage;
    });

  return response;
};

export const logOut = () => {
  auth.signOut();
  return auth;
};
