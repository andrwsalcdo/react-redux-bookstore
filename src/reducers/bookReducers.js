// .src/reducers/bookReducers.js

//reducers must be pure functions, they can't mutate data.

//how to make an update without mutating?
// create another array of data and update its content with
// previous state and changes made.

export default (state = [], action) => {
    switch (action.type){
        // Check if action dispatched is
        // CREATE_BOOK and act on that
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({}, action.book)
            ]; 
        default:
            return state;
    }
};
