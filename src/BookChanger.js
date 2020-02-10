import React from "react";

const BookChanger = ({ book, onChangeBookStatus }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={event => onChangeBookStatus(book, event)}
        name={book.title}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookChanger;
