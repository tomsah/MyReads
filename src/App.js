import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css'
import Main from './Main'
import Search from './Search'

class BooksApp extends Component {
  state = {
    booksList:[]
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then((books) => {
        const dataBooksFiltered = books.map(({title, authors, shelf, imageLinks}) => ({
          title,
          authors,
          shelf,
          imageUrl: imageLinks.thumbnail
        }))
        this.setState(({booksList: dataBooksFiltered}))
    })
  }

  render() {
    const { booksList } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={ () => <Main booksList={booksList}/>} />
        <Route path='/Search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
