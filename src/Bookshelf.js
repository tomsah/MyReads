import React from 'react'
import Book from './Book'

const Bookshelf = ({shelfBooksList, onChangeBookStatus}) => {
  return <div className="bookshelf-books">
    <ol className="books-grid">
      {
        shelfBooksList.map(book => (
          <li key={book.title}>
            {
              <Book title={book.title} author={book.authors} imageUrl={book.imageUrl} shelf={book.shelf} onChangeBookStatus={onChangeBookStatus} />
            }
          </li>
        ))
      }
    </ol>
  </div>
}

export default Bookshelf
