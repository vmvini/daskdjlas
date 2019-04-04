import React, { Component } from 'react';
import './FeedPost.css';

class FeedPost extends Component {
  getDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
  }
  render() {
    const post = this.props.post;
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Post n {post._id}</h2>
          <p className="card-text">{post.text}</p>
        </div>
        <div className="card-footer text-muted">
          Postado em { this.getDate(post.createdAt) }
        </div>
      </div>
    );
  }
}

export default FeedPost;
