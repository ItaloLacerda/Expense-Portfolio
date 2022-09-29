import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// configure aqui sua store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
