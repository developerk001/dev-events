import { createReducer } from '../../app/common/util/reducerUtil';
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from './asyncConstatns'

const init = {
  loading: false
}

export const asyncActionStart = (state, payload) => {
  return {...state, loading: true}
}

export const asyncActionFinish = (state, paylod) => {
  return {...state, loading: false}
}

export const asyncActionError = (state, paylod) => {
  return {...state, loading: false}
}

export default createReducer(init, {
  [ASYNC_ACTION_START]: asyncActionStart,
  [ASYNC_ACTION_FINISH]: asyncActionFinish,
  [ASYNC_ACTION_ERROR]: asyncActionError
})