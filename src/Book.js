import React  from 'react'
import BookChanger from './BookChanger'

const Book = ({imageUrl, title, author, shelf, onChangeBookStatus}) => {
  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${imageUrl})` }} />
        { <BookChanger title={title} shelf={shelf} onChangeBookStatus={onChangeBookStatus}/> }
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book

