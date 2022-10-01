import fetchAPI from '../../API/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_VALIDATION = 'LOGIN_VALIDATION';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const WALLET_FORM = 'WALLET_FORM';

export const loginValidationAction = (value) => ({
  type: LOGIN_VALIDATION,
  email: value,
});

export const currenciesAction = (coins) => ({
  type: CURRENCIES,
  currencies: coins,
});

export const addExpenses = (information) => ({
  type: ADD_EXPENSES,
  payload: information,
});

export const walletFormAction = (type, value) => ({
  type: WALLET_FORM,
  [type]: value,
});

export const fetchCoins = (action, information) => async (dispatch) => {
  const test = await fetchAPI();
  const coins = Object.keys(test);
  switch (action) {
  case currenciesAction:
    dispatch(action(coins));
    break;
  case addExpenses:
    dispatch(action(information));
    break;
  default:
    break;
  }
};
