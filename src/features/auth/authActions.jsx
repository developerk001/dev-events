import { LOGIN_USER, SIGN_UP_USER } from './authConstants';

export const login = (creds) => {
  return {
    type: LOGIN_USER,
    payload: {
      creds
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_UP_USER
  }
}