// ./src/components/book/BookPage.js

import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
  constructor(props) {
      //pass props back to parent
      super(props);
  }

  // Submit book handler
  submitBook(input) {
      this.props.createBook(input);
  }

  render(){
    //title input tracker
    let titleInput;
    //return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b,i) => <li key={i}>{b.title}</li> )}
        </ul>
        <div>
            <h3>Books Form</h3>
            <form onSubmit={e => {
                //prevent request
                e.preventDefault();
                //assemble inputs
                var input = {title: titleInput.value};
                // call handler
                this.submitBook(input);
                // Reset Form
                e.target.reset();
            }}>
              <input type="text" name="title" ref={node => titleInput = node}/>
              <input type="submit"/>
            </form>
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // you can now say this.props.books
        books: state.books
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // you can now say this.props.createBook
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

// use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);
