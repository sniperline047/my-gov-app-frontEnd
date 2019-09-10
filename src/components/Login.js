import React from 'react';
import { login } from './UserFunction.js';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Logo from './Logo';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CirLogo from '../images/man.svg';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
		}
		
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this) 
	}

	onChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}
	
	onSubmit = (event) => {
		event.preventDefault()

		const user = {
			email: this.state.email,
			password: this.state.password
		}

		login(user).then(res => {
			if(res) {
				this.props.history.push('/profile');
			} else {
				alert("Wrong Credentials!");
			}
		})
	}

	render() {
		return(
			<div>
				<div className="h-10">
					<Header />
				</div>
				<div className="h-30 flex">
					<div className="w-20">
						<Logo />
					</div>
					<div className="w-60">
						<h1 className="tc" >User Log-In</h1>
					</div>
					<div className="w-15 right-0 fixed">
						<NavBar />
					</div>
				</div>
				<div className="h-50 center pb4">
					<main className="pa4 black-80 ba br3 shadow-5 w-40">
			            <Avatar className="center">
	            			<img src={CirLogo} alt="Logo2"/>
	          			</Avatar>
			          	<Typography component="h1" variant="h5">
			            	Sign in
			            </Typography>
					    <form noValidate onSubmit={this.onSubmit} >
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      	<div className="mt3">
						        	<p className="db fw6 lh-copy f6">Email</p>
						        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" value={this.state.email} onChange={this.onChange} />
						      	</div>
						      	<div className="mv3">
						        	<p className="db fw6 lh-copy f6">Password</p>
						        	<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" value={this.state.password} onChange={this.onChange} />
						      	</div>
						      	<p className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</p>
						    </fieldset>
						    <div className="">
						      	<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Log in" />
						    </div>
						    <div className="lh-copy mt3">
						    	<Link to="/register">
						      		<p className="f6 link dim black db pointer">Sign up</p>
						      	</Link>
					    	</div>
					    </form>
					</main>
				</div>
				<div className="h-10 pt6">
					<Footer />
				</div>
			</div>
		);
	}
}
// <a href="#0" className="f6 link dim black db">Forgot your password?</a>