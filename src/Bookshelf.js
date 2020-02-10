import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelfBooksList, searchBookList, onChangeBookStatus }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {shelfBooksList.length > 0
          ? shelfBooksList.map((book, i) => {
              return (
                <li key={`${book.title}-${i}`}>
                  {<Book book={book} onChangeBookStatus={onChangeBookStatus} />}
                </li>
              );
            })
          : "Please add a book or type a search "}
      </ol>
    </div>
  );
};

export default Bookshelf;
