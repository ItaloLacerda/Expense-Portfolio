// Coloque aqui suas actions
export const LOGIN_VALIDATION = 'LOGIN_VALIDATION';
export const WALLET_DATA = 'WALLET_DATA';

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

const walletData = (coins) => ({
  type: WALLET_DATA,
  currencies: coins,
  expenses: [],
  editor: false,
  idToEdit: 0,
});

export const fetchCoins = () => async (dispatch) => {
  const FETCH = await fetch('https://economia.awesomeapi.com.br/json/all');
  const DATA = await FETCH.json();
  delete DATA.USDT;
  const coins = Object.keys(DATA);
  dispatch(walletData(coins));
};
