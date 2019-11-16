import firebase from "firebase";
import * as user from "types/user";

export async function login({ email, password }: user.LoginRequest) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      throw error;
    });
}

export async function register({
  firstName,
  lastName,
  email,
  password
}: user.RegistrationRequest) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error: firebase.auth.Error) => {
      throw error;
    });
}

export async function logout() {
  return firebase
    .auth()
    .signOut()
    .catch(error => {
      throw error;
    });
}
