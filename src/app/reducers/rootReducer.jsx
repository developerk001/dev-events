import { combineReducers } from "redux";

import { reducer as FormReducer } from 'redux-form';
import testReducer from "../../features/test/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from '../../features/modals/modalReducer';
import authReducers from '../../features/auth/authReducers';
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducers,
  async: asyncReducer
});

export default rootReducer;
