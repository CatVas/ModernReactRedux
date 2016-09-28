import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange.bind(this)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
