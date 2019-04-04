import React, { Component } from 'react';
import FeedPost from './../FeedPost/FeedPost';
import Post from './../Post/Post';
import SideWidget from './../SideWidget/SideWidget';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import Modal from 'react-modal';
import { post } from './../../services/UserService';
import './MainPage.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body')

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  onSend(text) {
    post(text)
    .then((res) => {
      debugger;
    }, (err) => {
      this.setState({
        modalIsOpen: true,
        errorMsg: 'Erro ao enviar postagem.'
      });
    })
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container marginTop">
          <div className="row">
            
          </div>
          <div className="row">
            
            <div className="col-md-8">
              <Post onSend={(text) => this.onSend(text)}/>
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          style={customStyles}
          contentLabel="Erro"
        >
          <h2>{this.state.errorMsg}</h2>
          <button onClick={() => this.closeModal()}>close</button>
        </Modal>
      </div>
    );
  }
}

export default MainPage;
