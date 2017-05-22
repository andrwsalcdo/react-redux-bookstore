// ./src/components/book/BookPage.js

import React from 'react';

class Book extends React.Component {
  constructor(props) {
      //pass props back to parent
      super(props);
  }

  // Submit book handler
  submitBook(input) {
      alert('Submitted')
  }

  render(){
    //title input tracker
    let titleInput;
    //return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          { /* Traverse Books Array */}
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

export default Book; 
