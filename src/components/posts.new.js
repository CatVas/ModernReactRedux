import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions';


class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;console.log(this.props);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>

        <div className={`form-group ${title.touched && title.invalid && 'has-danger'}`}>
          <label>Title</label>
          <input className="form-control" type="text" { ...title } />
          <div className="text-help">{title.touched && title.error}</div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid && 'has-danger'}`}>
          <label>Categories</label>
          <input className="form-control" type="text" { ...categories } />
          <div className="text-help">{categories.touched && categories.error}</div>
        </div>

        <div className={`form-group ${content.touched && content.invalid && 'has-danger'}`}>
          <label>Content</label>
          <textarea className="form-control" { ...content } ></textarea>
          <div className="text-help">{content.touched && content.error}</div>
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = `Forgot title? Haven't you forgot your head, have you?`;
  }
  if(!values.categories) {
    errors.categories = 'At least 1 category, please!';
  }
  if(!values.content) {
    errors.content = 'You could say something';
  }

  return errors;
}

export default reduxForm({
  fields: ['title', 'categories', 'content'],
  form: 'PostNewForm',
  validate,
}, null, mapDispatchToProps)(PostsNew);
