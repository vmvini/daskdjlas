import React, {Component} from 'react';
import './style.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
import NavigationPanel from './NavigationPanel';
import Modal from './Modal';

class SigninForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}
	
	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {
		const {mounted} = this.state;

		let child;
		let test = 12;

		if(mounted) {
			child = (
                <div className="SignInForm">
				  <div className="App_test">
					<NavigationPanel></NavigationPanel>
                    <Modal 
                        onSignin={(user) => this.props.onSignin(user)} 
                        onSignup={(user) => this.props.onSignup(user)} 
                        onSubmit={this.handleSubmit}/>
				  </div>
                </div>
			);
		}
		
		return(
            <div className="SignInForm">
                <div className="App">
                    <ReactCSSTransitionGroup 
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                            {child}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
		);
	}
}

export default SigninForm;
