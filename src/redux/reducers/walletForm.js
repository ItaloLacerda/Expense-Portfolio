import { WALLET_FORM } from '../actions';

const INITIAL_STATE = {
  value: '',
  currency: '',
  method: '',
  tag: '',
  description: '',
  exchangeRates: '',
};

const walletFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_FORM:
    return { ...state, ...action };
  default:
    return state;
  }
};

export default walletFormReducer;
