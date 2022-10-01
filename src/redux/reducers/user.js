// Esse reducer será responsável por tratar as informações da pessoa
import { LOGIN_VALIDATION } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_VALIDATION:
    return { ...state, ...action };
  default:
    return state;
  }
};

export default userReducer;
