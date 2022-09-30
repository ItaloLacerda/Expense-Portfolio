// Coloque aqui suas actions
export const LOGIN_VALIDATION = 'LOGIN_VALIDATION';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const WALLET_FORM = 'WALLET_FORM';

export const loginValidationAction = (type, value) => {
  if (type === 'email') {
    return {
      type: LOGIN_VALIDATION,
      email: value,
    };
  }

  if (type === 'password') {
    return {
      type: LOGIN_VALIDATION,
      password: value,
    };
  }
};

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
  const FETCH = await fetch('https://economia.awesomeapi.com.br/json/all');
  const DATA = await FETCH.json();
  delete DATA.USDT;
  // const validCoins = DATA;
  const coins = Object.keys(DATA);
  console.log(information);
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
