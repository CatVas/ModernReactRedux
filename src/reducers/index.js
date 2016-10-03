import { combineReducers } from 'redux';

import ActiveBookReducer from './reducerActiveBook';
import BooksReducer from './reducerBooks';


const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer,
});

export default rootReducer;
