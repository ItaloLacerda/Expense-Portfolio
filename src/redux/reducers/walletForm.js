import { WALLET_FORM } from '../actions';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
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
