import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';


class PostShow extends Component {
  componentWillMount() {
    const { id } = this.props.params;

    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Show a post {this.props.params.id}
      </div>
    );
  }
}

export default connect(null, { fetchPost })(PostShow);
