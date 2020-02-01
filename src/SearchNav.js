import React, { Component } from 'react'

class SearchNav extends Component {

  render () {
    const { handleShowSearchPage } = this.props
    return(
      <div className="open-search">
        <button onClick={() => handleShowSearchPage()}>Add a book</button>
      </div>
    )
  }
}
export default SearchNav
