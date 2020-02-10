import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Bookshelf from "./Bookshelf";

class Search extends Component {
  state = {
    searchInput: "",
    searchBookList: [],
    noResult: null
  };

  handleSearch = event => {
    const { booksList } = this.props;
    this.setState({ searchInput: event.target.value});
    search(event.target.value).then(books => {
      if (this.state.searchInput === "") {
        return this.setState({ searchBookList: [], noResult: null});
      }

      if (books.error) {
        return this.setState({ noResult: books.error });
      }
      const dataBooksFiltered = books.map(
        ({ title, authors ='Authors unknown', shelf, imageLinks = {}, id }) => {
          const isBookInLib = booksList.find(b => {
            return b.title === title;
          });
          return {
            title,
            authors,
            shelf: isBookInLib ? isBookInLib.shelf : "none",
            imageUrl: imageLinks.thumbnail,
            id
          };
        }
      );
      return this.setState({ searchBookList: dataBooksFiltered, noResult: null });
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.state.searchInput !== nextState.searchInput) return true
  // }

  render() {
    const { noResult, searchBookList } = this.state;
    const { onChangeBookStatus } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {" "}
            Close{" "}
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              name="searchTerm"
              placeholder="Search by title or author"
              value={this.state.searchInput}
              onChange={this.handleSearch}
            />
          </div>
        </div>

        <div className="search-books-results">
          {noResult ? (
            <div>
              oooppps!!!, sorry we do not have anything matching your search
            </div>
          ) : (
            <Bookshelf
              shelfBooksList={searchBookList}
              searchBookList={searchBookList}
              onChangeBookStatus={onChangeBookStatus}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
