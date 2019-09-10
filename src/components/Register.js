import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Logo from './Logo';
import { register } from './UserFunction.js';
import img from '../images/img.png';
import {Link} from 'react-router-dom';

export default class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
			username: '',
			gender: '',
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
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			gender: this.state.gender,
			email: this.state.email,
			password: this.state.password,
		}

		register(user).then(res => {
			this.props.history.push('/login');
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
						<h1 className="tc" >Sign Up!</h1>
					</div>
					<div className="w-15 right-0 fixed">
						<NavBar />
					</div>
				</div>
				<div className="h-50 center pb4">
					<div className="w-90 w-80-m w-50-l center cover bg-white shadow-1">
						<div className="w-30">
							<img alt="background" src={img} height="500" />
						</div>
						<form noValidate className="w-70 ph3 pt3 pb4 f7 bg-white" onSubmit={this.onSubmit} >
							<header className="center">
								<h1 className="b ma0 f3">Sign Up</h1>
							</header>
							<div className="pt3 mb3 flex">
								<div className="w-50 pr3">
									<label className="db ttu b lh-copy">First Name</label>
									<input name="first_name" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={this.state.first_name} onChange={this.onChange} />
								</div>
								<div className="w-50">
									<label className="db ttu b lh-copy">Last Name</label>
									<input name="last_name" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={this.state.last_name} onChange={this.onChange} />
								</div>
							</div>
							<div className="pt3 mb3 flex">
								<div className="w-50 pr3">
									<label className="db ttu b lh-copy">Username</label>
									<input name="username" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={this.state.username} onChange={this.onChange} />
								</div>
								<div className="w-50">
									<label className="db ttu b lh-copy">Gender</label>
									<select name="gender" size="2" className="center db h2 f6 bg-near-white ba b--sliver gray" value={this.state.gender} onChange={this.onChange} >
										<option value="M">Male</option>
										<option value="F">Female</option>
									</select>
								</div>
							</div>
							<div className="mb3">
								<label className="db ttu b lh-copy">Email</label>
								<input name="email" type="email" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={this.state.email} onChange={this.onChange} />
							</div>
							<div className="mb4">
								<label className="db ttu b lh-copy">Password</label>
								<input name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={this.state.password} onChange={this.onChange} />
							</div>
							<div className="mb3 tc f6">
								Do you have an account? 
								<Link to="/login">
									<p className="blue ph1 pointer">Log In Now!</p>
								</Link>
							</div>
							<div className="tc">
								<input type="submit" value="Sign Up" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
							</div>
						</form>
					</div>
				</div>
				<div className="h-10 pt5">
					<Footer />
				</div>
			</div>
		);
	}
}