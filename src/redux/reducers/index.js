import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import walletForm from './walletForm';

// Configure os seus reducer
const rootReducer = combineReducers({
  user,
  wallet,
  walletForm,
});

export default rootReducer;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
