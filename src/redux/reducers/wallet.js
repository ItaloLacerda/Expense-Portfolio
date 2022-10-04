// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, CURRENCIES,
  DELETE_EXPENSES, BUTTON_EDIT_EXPENSES,
  EDIT_VALIDATION, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const editExpense = (state, action) => {
  const index = state.expenses.findIndex((element) => element.id === action.id);
  const { expenses } = state;
  const { exchangeRates } = expenses[index];
  expenses[index] = {
    ...action,
    exchangeRates,
  };
  return expenses;
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, ...action };
  case ADD_EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: [...action.payload],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...editExpense(state, action.payload)],
    };
  case BUTTON_EDIT_EXPENSES:
    return {
      ...state,
      editor: true,
      idToEdit: action.idToEdit,
    };
  case EDIT_VALIDATION:
    return {
      ...state,
      editor: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
