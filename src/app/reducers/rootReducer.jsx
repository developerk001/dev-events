import { combineReducers } from "redux";

import { reducer as FormReducer } from 'redux-form';
import testReducer from "../../features/test/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from '../../features/modals/modalReducer';
import authReducers from '../../features/auth/authReducers';

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducers 
});

export default rootReducer;
