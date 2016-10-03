import React, { Component } from 'react';

import BookDetail from '../containers/bookDetail';
import BookList from '../containers/bookList';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
