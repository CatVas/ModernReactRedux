import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class BookDetail extends Component {
  render() {
    const { activeBook } = this.props;

    return activeBook
      ? (
        <div>
          <h3>Details for:</h3>
          <div>Title: {activeBook.title}</div>
          <div>Pages: {activeBook.pages}</div>
        </div>
      )
      : (
        <div>Select a book please</div>
      );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
