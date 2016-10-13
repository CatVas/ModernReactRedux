import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      const { categories, id, title } = post;

      return (
        <li className="list-group-item" key={id}>
          <Link to={`/posts/${id}`}>
            <span className="pull-xs-right">{categories}</span>
            <strong>{title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
