import React, { Component } from "react";
import { throttle } from 'throttle-debounce';
import { Link } from "react-router-dom";
import { search } from "../main/BooksAPI";
import Bookshelf from "../main/Bookshelf";

class Search extends Component {
  state = {
    searchInput: "",
    searchBookList: [],
    noResult: null
  };

  handleSearch = event => {
    const { booksList } = this.props;
    const { value } = event.target;

    // set the Input Value
    this.setState({ searchInput: value });

    // when the input filed is empty reset our local state
    if (value === "") {
      return this.setState({ searchBookList: [], noResult: null });
    }

    // only trigger the search when there is a value
    value && search(value).then(books => {

      if (books.error) {
        return this.setState({ noResult: books.error });
      }

      const dataBooksFiltered = books.map(
        ({
          title,
          authors = "Authors unknown",
          shelf,
          imageLinks = {},
          id
        }) => {
          const isBookInLib = booksList.find(b => b.title === title);
          return {
            title,
            authors,
            shelf: isBookInLib ? isBookInLib.shelf : "none",
            imageUrl: imageLinks.thumbnail,
            id
          };
        }
      );
      return this.setState({
        searchBookList: dataBooksFiltered,
        noResult: null
      });
    });
  };

  render() {
    const { noResult, searchBookList } = this.state;
    const { onChangeBookStatus } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />

          <div className="search-books-input-wrapper">
            <input
              type="text"
              name="searchTerm"
              placeholder="Search by title or author"
              value={this.state.searchInput}
              onChange={throttle(300, this.handleSearch)}
            />
          </div>
        </div>

        <div className="search-books-results">
          {noResult ? (
            <div>
              oopsy!!!, sorry we did not find anything matching your search, try
              again :)
            </div>
          ) : (
            <Bookshelf
              shelfBooksList={searchBookList}
              onChangeBookStatus={onChangeBookStatus}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
