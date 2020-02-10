import React from "react";
import BookChanger from "./BookChanger";

const Book = ({ book, onChangeBookStatus, booksList }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageUrl})`
          }}
        />
        {
          <BookChanger
            book={book}
            booksList={booksList}
            onChangeBookStatus={onChangeBookStatus}
          />
        }
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
