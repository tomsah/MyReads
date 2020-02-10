import React from "react";
import Header from "./Header";
import SearchNav from "./SearchNav";
import Bookshelf from "./Bookshelf";

const shelves = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want To Read",
  read: "Read"
};
const shelvesArrKey = Object.keys(shelves);

const Main = ({ booksList, onChangeBookStatus }) => (
  <div className="list-books">
    {<Header />}
    <div className="list-books-content">
      {shelvesArrKey.map(shelfType => (
        <div key={shelfType} className="bookshelf">
          <h2 className="bookshelf-title">{shelves[shelfType]}</h2>
          <Bookshelf
            shelfBooksList={booksList.filter(b => b.shelf === shelfType)}
            onChangeBookStatus={onChangeBookStatus}
          />
        </div>
      ))}
    </div>
    {<SearchNav onChangeBookStatus={onChangeBookStatus} />}
  </div>
);

export default Main;
