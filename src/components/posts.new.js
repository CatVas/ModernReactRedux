import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;console.log(this.props);

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a new post</h3>

        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" { ...title } />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input className="form-control" type="text" { ...categories } />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" { ...content } ></textarea>
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  fields: ['title', 'categories', 'content'],
  form: 'PostNewForm',
})(PostsNew);
