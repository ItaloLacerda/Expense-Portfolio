import fetchAPI from '../../API/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_VALIDATION = 'LOGIN_VALIDATION';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const WALLET_FORM = 'WALLET_FORM';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const BUTTON_EDIT_EXPENSES = 'BUTTON_EDIT_EXPENSES';
export const EDIT_VALIDATION = 'EDIT_VALIDATION';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

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

export const deleteExpenses = (prevExpense, id) => ({
  type: DELETE_EXPENSES,
  payload: prevExpense.filter((element) => element.id !== id),
});

export const buttonEditExpenses = (id) => ({
  type: BUTTON_EDIT_EXPENSES,
  idToEdit: id,
});

export const editValidation = () => ({
  type: EDIT_VALIDATION,
});

export const editExpense = (expenses) => ({
  type: EDIT_EXPENSE,
  payload: expenses,
});

// export const walletFormAction = (type, value) => ({
//   type: WALLET_FORM,
//   [type]: value,
// });

export const fetchCoins = (action) => async (dispatch) => {
  const test = await fetchAPI();
  const coins = Object.keys(test);
  dispatch(action(coins));
};
