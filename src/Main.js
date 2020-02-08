import React, { Component } from 'react'
import Header from './Header'
import SearchNav from './SearchNav'
import Bookshelf from './Bookshelf'

class Main extends Component{
  state = {
    currentlyReading: {list: [], name: 'Currently Reading'},
    wantToRead: {list: [], name: 'Want To Read'},
    read: {list: [], name: 'Read'},
  }

  shelfDispatch(booksList) {
    const { currentlyReading, wantToRead, read  } = this.state
    return booksList.forEach((book) => {
      if(book.shelf === 'currentlyReading' && !currentlyReading.list.includes(book.title)) this.setState((prevState) => ({ currentlyReading: {...currentlyReading, list: [...prevState.currentlyReading.list, book]} }))
      if(book.shelf === 'wantToRead' && !wantToRead.list.includes(book.title)) this.setState((prevState) => ( {wantToRead: {...wantToRead, list: [...prevState.wantToRead.list, book]}}))
      if(book.shelf === 'read' && !read.list.includes(book.title)) this.setState((prevState) => ({read: {...read, list :[...prevState.read.list, book]}}))
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const {booksList} = this.props
    if (this.props !== prevProps) this.shelfDispatch(booksList)
  }

  render() {
    const shelves =  Object.keys(this.state)
    return(
      <div className="list-books">
        {<Header/>}
        <div className="list-books-content">
            {
              shelves.map(shelfType => {
                return <div key={shelfType} className="bookshelf">
                  <h2 className="bookshelf-title">{this.state[shelfType].name}</h2>
                  {<Bookshelf shelfBooksList={this.state[shelfType].list} />}
                </div>
              })
            }
        </div>
        {<SearchNav  />}
      </div>
    )
  }
}

export default Main
