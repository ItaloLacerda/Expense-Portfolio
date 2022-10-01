import fetchAPI from '../../API/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_VALIDATION = 'LOGIN_VALIDATION';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const WALLET_FORM = 'WALLET_FORM';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const loginValidationAction = (value) => ({
  type: LOGIN_VALIDATION,
  email: value,
});

export const currenciesAction = (coins) => ({
  type: CURRENCIES,
  currencies: coins,
});

export const addExpenses = (information) => {
  console.log(information);
  return ({
    type: ADD_EXPENSES,
    payload: information,
  });
};

export const deleteExpenses = (prevExpense, id) => ({
  type: DELETE_EXPENSES,
  payload: prevExpense.filter((element) => element.id !== id),
});

export const walletFormAction = (type, value) => ({
  type: WALLET_FORM,
  [type]: value,
});

export const fetchCoins = (action) => async (dispatch) => {
  const test = await fetchAPI();
  const coins = Object.keys(test);
  dispatch(action(coins));
};
