import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; TwitterDemo 2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
