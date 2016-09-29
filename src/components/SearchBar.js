import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div>
        <input
          onChange={ev => this.onInputChange(ev.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
