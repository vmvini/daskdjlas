import React, { Component } from 'react';
import FeedPost from './../FeedPost/FeedPost';
import SideWidget from './../SideWidget/SideWidget';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container marginTop">
          <div className="row">
            <div className="col-md-8">
              <FeedPost></FeedPost>
              <FeedPost></FeedPost>
              <FeedPost></FeedPost>
              <FeedPost></FeedPost>
            </div>
            <div className="col-md-4">
              <SideWidget></SideWidget>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainPage;
