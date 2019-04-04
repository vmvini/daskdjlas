import React, { Component } from 'react';
import Modal from 'react-modal';
import SigninForm from './../SigninForm';
import { signin, signup } from './../../services/UserService';

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

class SigninPage extends Component {

  constructor() {
    super();
    
    this.state = {
        modalIsOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
  }

  onSignin(user) {
    return signin(user.email, user.password)
    .then((res) => this.redirect(res))
    .catch(() => this.onSigninError());
  }

  onSignup(user) {
    return signup(user.email, user.password)
    .then((res) => this.redirect(res))
    .catch(() => this.onSignupError());
  }

  redirect(user) {
    this.props.history.push('/home');
    return Promise.resolve();
  }

  onSigninError() {
    this.setState({
      modalIsOpen: true,
      errorMsg: 'Usuário ou senha incorretos'
    })
  }

  onSignupError() {
    this.setState({
      modalIsOpen: true,
      errorMsg: 'Erro ao realizar cadastro'
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  afterOpenModal() {
  
  }

  render() {
    return (
      <div id="signincontainer">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Erro"
        >
          <h2>
            {this.state.errorMsg}
          </h2>
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <SigninForm
            onSignin={(user) => this.onSignin(user)}
            onSignup={(user) => this.onSignup(user)}
        >

        </SigninForm>
      </div>
    );
  }
}

export default SigninPage;
