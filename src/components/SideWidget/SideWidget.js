import React, { Component } from 'react';
import './SideWidget.css';

class SideWidget extends Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">Freebies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideWidget;
