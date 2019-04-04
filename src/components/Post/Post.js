import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      length: 0
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
      length: event.target.value.length 
    });
  }

  isInvalid() {
    return this.state.length > 140 || this.state.length === 0;
  }

  length() {
    if ( this.isInvalid() ) {
      return (
        <p style={this.invalidStyle()}>
          {this.state.length}
        </p>
      );
    }
    return (
        <p style={this.validStyle()}>
          {this.state.length}
        </p>
    );
  }

  invalidStyle() {
    return {
      color: 'red'
    };
  }

  validStyle() {
    return {
      color: 'blue'
    };
  }

  render() {
    return (
      <div className="card mb-4">
        <h5 className="card-header">
          O que você está pensando?
        </h5>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}> 
            <div className="form-group">
              <textarea 
                onChange={(e) => this.handleChange(e)}
                value={this.state.text}
                className="form-control" 
                rows="3">
              </textarea>
            </div>
            {this.length()}
            <button 
                disabled={this.isInvalid()}
                type="submit" 
                onClick={() => this.props.onSend(this.state.text)}
                className="btn btn-primary">
                Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;


