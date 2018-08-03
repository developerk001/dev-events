import { LOGIN_USER, SIGN_UP_USER } from "./authConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const init = {
  currentUser: {}
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email
  }
}

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}

export default createReducer(init, { 
  [LOGIN_USER]: loginUser,
  [SIGN_UP_USER]: signOutUser
});
