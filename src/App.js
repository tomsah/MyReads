import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main'
import Search from './Search'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Main} />
        <Route path='/Search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
