import React, { Component } from 'react';


class SearchBar extends Component {
  onInputChange(ev) {
    console.log(ev.target.value);
  }

  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }
}

export default SearchBar;
