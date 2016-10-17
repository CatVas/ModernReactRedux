import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { deletePost, fetchPost } from '../actions';


class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    const { id } = this.props.params;

    this.props.fetchPost(id);
  }

  onPostDelete() {
    const { id } = this.props.params;

    this.props.deletePost(id).then(() => this.context.router.push('/'));
  }

  render() {
    const { post } = this.props;

    return post ? (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onPostDelete.bind(this)}
        >Delete post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
    : (
      <div>Loading...</div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { deletePost, fetchPost })(PostShow);
