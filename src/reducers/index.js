// Set up your root reducer here...

// ./src/reducers/index.js

 import { combineReducers } from 'redux';
 import books from './bookReducers'

 export default combineReducers({
    books: books,
    //more reducers can go here if necessary 
 });
