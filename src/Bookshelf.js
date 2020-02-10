import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelfBooksList, onChangeBookStatus }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {shelfBooksList.length > 0
        ? shelfBooksList.map((book, i) => (
            <li key={`${book.title}-${i}`}>
              {<Book book={book} onChangeBookStatus={onChangeBookStatus} />}
            </li>
          ))
        : null}
    </ol>
  </div>
);

export default Bookshelf;
