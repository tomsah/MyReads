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
    this.setState({ searchInput: event.target.value });

    if (!event.target.value) {
      return this.setState({ searchBookList: [] });
    }
    search(event.target.value).then(books => {
      if (books.error) {
        return this.setState({ noResult: books.error });
      }
      // this.setState({noResult: null })
      const dataBooksFiltered = books.map(
        ({ title, authors, shelf, imageLinks = {} }) => {
          const isBookInLib = booksList.find(b => {
            return b.title === title;
          });
          return {
            title,
            authors,
            shelf: isBookInLib ? isBookInLib.shelf : "none",
            imageUrl: imageLinks.thumbnail
          };
        }
      );
      return this.setState({ searchBookList: dataBooksFiltered });
    });
  };

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
