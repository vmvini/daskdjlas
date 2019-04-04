import React, { Component } from 'react';
import FeedPost from './../FeedPost/FeedPost';
import Post from './../Post/Post';
import SideWidget from './../SideWidget/SideWidget';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import Modal from 'react-modal';
import { post, feed } from './../../services/UserService';
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

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      posts: []
    };
  }

  componentWillMount() {
    feed()
    .then((res) => {
      this.updatePosts(res.data);
    })
    .catch((e) => {
      this.setState({
        modalIsOpen: true,
        errorMsg: 'Erro ao procurar posts.'
      });
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  onSend(text) {
    post(text)
    .then((res) => {
      this.addPost(res.data);
    })
    .catch((err) => {
      this.setState({
        modalIsOpen: true,
        errorMsg: 'Erro ao enviar postagem.'
      });
    });
  }

  updatePosts(posts) {
    this.setState({
      posts: [
        ...posts.map((p) => ( {...p }))
      ]
    });
  }

  addPost(post) {
    this.setState({
      posts: [ 
        {...post}, 
        ...this.state.posts.map((p) => ( { ...p })) 
      ]
    });
  }

  renderPosts(posts) {
    return posts
    .map((p) => {
      return (
        <FeedPost key={p._id} post={p}>
        </FeedPost>
      );
    });
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
              {this.renderPosts(this.state.posts)}
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
