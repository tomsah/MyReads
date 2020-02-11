import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./main/BooksAPI";

import "./App.css";
import Main from "./main/Main";
import Search from "./search/Search";

class BooksApp extends Component {
  state = {
    booksList: []
  };


  componentDidMount() {
    /**
     * we are getting all the user books by calling getAll from BooksAPI
     * we are filtering the book data and only returning what we need
     * @return state object with an array of books
     */
    BooksAPI.getAll().then(books => {
      const dataBooksFiltered = books.map(
        ({
          title,
          authors = "Authors unknown",
          shelf,
          imageLinks = {},
          id
        }) => ({
          title,
          authors,
          shelf,
          imageUrl: imageLinks.thumbnail,
          id
        })
      );
      this.setState({ booksList: dataBooksFiltered });
    });
  }

  /**
   * changeBookStatus will update the shelf property of book
   * and update the DB by calling update from BooksAPI
   * @param bookUpdate Array
   * @param event object
   * @return state object
   */

  changeBookStatus = (bookUpdate, event) => {
    event.stopPropagation();
    const { booksList } = this.state;
    const { value } = event.target;
    let newBooksList = [...booksList];
    const isBookInList = booksList.some(b => b.title === bookUpdate.title);
    isBookInList
      ? booksList.forEach((book, i) => {
          if (book.title === bookUpdate.title) {
            newBooksList[i].shelf = value;
            this.setState({ booksList: newBooksList });
          }
        })
      : this.setState({
          booksList: [...newBooksList, { ...bookUpdate, shelf: value }]
        });
    BooksAPI.update(bookUpdate, value);
  };

  render() {
    const { booksList } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Main
              booksList={booksList}
              onChangeBookStatus={this.changeBookStatus}
            />
          )}
        />
        <Route
          path="/Search"
          render={() => (
            <Search
              booksList={booksList}
              onChangeBookStatus={this.changeBookStatus}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
