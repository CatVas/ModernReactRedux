import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  clearForm(){
    this.setState({ term: '' });
  }

  onFormSubmit(ev) {
    ev.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.clearForm();
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          onChange={this.onInputChange}
          placeholder="Type a city to get its 5-day forecast"
          value={this.state.term}
        />

        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
