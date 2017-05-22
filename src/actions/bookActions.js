// .src/actions/bookActions.js

export const createBook = (book) => {
    // return action
    return {
        // unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book: book
    }
};
