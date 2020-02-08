import React from 'react'
import Book from './Book'

const Bookshelf = ({shelfBooksList}) => {
  return <div className="bookshelf-books">
    <ol className="books-grid">
      {
        shelfBooksList.map(book => (
          <li key={book.title}>
            {
              <Book title={book.title} author={book.authors} imageUrl={book.imageUrl} />
            }
          </li>
        ))
      }
    </ol>
  </div>
}

export default Bookshelf
