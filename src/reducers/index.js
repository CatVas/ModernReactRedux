import { combineReducers } from 'redux';

import BooksReducer from './reducerBooks';console.log(BooksReducer);


const rootReducer = combineReducers({
  //state: (state = {}) => state,
  books: BooksReducer,
});

export default rootReducer;
