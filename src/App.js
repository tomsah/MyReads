import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import "./App.css";
import Main from "./Main";
import Search from "./Search";

class BooksApp extends Component {
  state = {
    booksList: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const dataBooksFiltered = books.map(
        ({ title, authors, shelf, imageLinks, id }) => ({
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
      BooksAPI.update(bookUpdate, value)
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
              onChangeBookStatus={this.changeBookStatus}
              booksList={booksList}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
