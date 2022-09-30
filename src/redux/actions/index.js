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

export const walletData = () => ({
  type: WALLET_DATA,
});
