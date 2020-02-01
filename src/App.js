import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main'
import Search from './Search'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  handleShowSearchPage = () => this.setState(prevState => ({ showSearchPage: !prevState.showSearchPage }))


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <Search handleShowSearchPage={this.handleShowSearchPage}/>
        ) : (
            <Main handleShowSearchPage={this.handleShowSearchPage}/>
        )}
      </div>
    )
  }
}

export default BooksApp
