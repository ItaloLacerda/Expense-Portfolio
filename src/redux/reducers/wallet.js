// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, ...action };
  case ADD_EXPENSES: {
    const { exchangeRates, currency } = action.payload;
    const { ask } = exchangeRates[currency];
    const sumIdEdit = Number(state.idToEdit) + Number(action.payload.value) * Number(ask);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      idToEdit: parseFloat(sumIdEdit.toFixed(2)),
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
