import React, { Component } from 'react'
import Header from './Header'
import SearchNav from './SearchNav'
import Bookshelf from './Bookshelf'

class Main extends Component{
  render() {
    const { handleShowSearchPage } = this.props
    return(
      <div className="list-books">
        {<Header/>}

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {<Bookshelf />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {<Bookshelf />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {<Bookshelf />}
            </div>
          </div>
        </div>
        { <SearchNav handleShowSearchPage={handleShowSearchPage} />}
      </div>
    )
  }
}

export default Main
