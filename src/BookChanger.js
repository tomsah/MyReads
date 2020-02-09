import React from 'react'

const BookChanger = ({shelf, title, onChangeBookStatus}) => (
  <div className="book-shelf-changer">
    <select  value={shelf} onChange={(event) => onChangeBookStatus(title, event) } name={title}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

export default BookChanger
