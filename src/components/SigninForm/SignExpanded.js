import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';

class SignExpanded extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false
		};
	}

	componentDidMount () {
     	this.setState({flexState: !this.state.flexState});  
  	}


	isFinished = () => {
		this.setState({animIsFinished: true});
	}
	
	onClick = () => {
	  this.props.onSubmit({
		email: this.state.email,
		password: this.state.password
	  });
	}

	onEmailChange = (event) => {
	  this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
	  this.setState({password: event.target.value});
	}

	render () {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
			{({flexVal}) =>
			<div className={this.props.type=='signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
				flexGrow: `${flexVal}`
			}}>
				<Motion style={{ 
					opacity: spring(this.state.flexState ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
				 }} >
						{({opacity, y}) =>
						<form 
							onSubmit={(e) => e.preventDefault()}
							className='logForm' 
							style={{
								WebkitTransform: `translate3d(0, ${y}px, 0)`,
								transform: `translate3d(0, ${y}px, 0)`,
								opacity: `${opacity}`
							}}>
							<h2>{this.props.type == 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
							<Input
								id="login"
								type="text"
								value={this.state.email} 
								onChange={(e) => this.onEmailChange(e)}
								placeholder="LOGIN" />
							<Input
								id="password"
								type="password"
								value={this.state.password} 
								onChange={(e) => this.onPasswordChange(e)}
								placeholder="PASSWORD" />
							<SubmitButton 
							  onClick={() => this.onClick()}
							  type={this.props.type}>
							</SubmitButton>
							<a href="url" className='forgotPass'>{this.props.type == 'signIn' ? 'Forgot password?' : ''}</a>
						</form>
						}
				</Motion>
			</div>
		}
			</Motion>
		);
	}

}

export default SignExpanded;